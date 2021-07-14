const db= require("../models");
const { Op } = require("sequelize");
const Produit_images = require("../models/Produit_images");
const produit_image = require("./produit_image");

exports.addProduit= (req,res,next)=>{
    db.Produit.create(req.body).then((produit)=>{
        req.body.ProduitId=produit.id;
        produit_image.addProduit_image(req,res);
        res.send('succes');
    }).catch(err => {
        next(err);
    });
};

exports.getProduits= (req,res)=>{
    db.Produit.findAll({
        include: {
            all: true
          //model: db.Produit_images,
          //where: {ProduitId: sequelize.where(Sequelize.col('ProduitId'), Sequelize.col('Produit.id'))}
        }
      }).then((produits)=>{
        res.send(produits);
    });
};

exports.getProduit= (req,res)=>{
    db.Produit.findOne({
        where : {id: req.params.id},
        include: {
          /* model: Produit_images,
          required: true */
          all:true
        }
      }).then((produits)=>{
        res.send(produits);
    });
};

//pour rechercher des produits d'une categorie
exports.getProduitsCategorie=(req,res,next)=>{
    db.Produit.findAll({
        where: {CategorieId: req.params.id },
        include: {
            all: true
        },
        limit: 4
      }).then((produits)=>{
        res.send(produits);
    });
};

exports.updateProduit= (req,res,next)=>{
    const {nom,description,PU,quantite_dispo}=req.body;
    db.Produit.update({ nom,description,PU,quantite_dispo},{ where:{id:req.params.id}})
    .then((produit)=>{
        res.send('succes');
    })
    .catch(err => {
        next(err);
    })
}

exports.deleteProduit= (req,res)=>{
    const idRecherche=req.params.id;
    db.Produit.destroy({where : {id: idRecherche}}).then(()=>{
        res.send('succees');
    });
};


//obtient les produits entre deux prix
exports.produitsFilter = async (req, res) => {
    const category = req.query.categorie;
    const price1 = req.query.price1;
    const price2 = req.query.price2;
    const marques = req.query.marques;
    const triProperty = req.query.triProperty;
    const triOption = req.query.triOption;
    const page= req.params.page;
    const page_size = req.params.page_size;

    let options = {where: {},order:[]};

    if(category){
        const cat =await db.Categorie.findOne({
            where:{
                nom_categorie:category
            }
        })
        options.where.CategorieId=cat.id;
    }

    if(price1 && price2){
        options.where.PU = { [Op.between]: [price1, price2] }
    }

    if(marques){
        if(marques.length==1){
            options.where.MarqueId = marques
        }
        else {
            options.where.MarqueId ={[Op.or]:marques }
        }
        
    }

    if(triProperty && triOption){
        options.order.push([triProperty,triOption]);
    }

    db.Produit.findAll({
        include:[{
            model:db.Produit_image,
            where:{
                estPrincipale:1
            }
        },{
            model:db.Categorie
        }],
        where:options.where,
        order:options.order,
        offset: parseInt((page -1) * page_size),
        limit: parseInt(page_size),
    })
    .then((produits)=>{
        db.Produit.count({
            where:options.where
        })
        .then((count)=>{
            res.send({produits,NombreDeProduits:count});
        })
    })
};

//obtient les produits par page
exports.getProduitsparPage = (req, res) => {
    const page= req.params.page;
    const page_size = req.params.page_size;

    db.Produit.findAll({
        include: ["Produit_images", "Categorie"],
        offset: parseInt((page -1) * page_size),
        limit: parseInt(page_size),
    }).then((produits) => {
        db.Produit.count()
        .then((count)=>{
            res.send({produits,NombreDeProduits:count});
        })
    });
};