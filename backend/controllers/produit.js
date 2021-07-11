const db= require("../models");
const Produit_images = require("../models/Produit_images");
const produit_image = require("./produit_image");

exports.addProduit= (req,res)=>{
    db.Produit.create(req.body).then((produit)=>{
        req.body.ProduitId=produit.id;
        produit_image.addProduit_image(req,res);
        res.send('succes');
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
          model: Produit_images,
          required: true
        }
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