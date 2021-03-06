const db=require("../models");

exports.addCategorie = (req,res,next)=>{
    db.Categorie.create(req.body)
    .then(()=>{
        res.send({message:'Categorie ajouté avec succès!'});
    })
    .catch((err)=>{
        next(err);
    });
}

exports.getCategoriesByPage = (req,res,next) => {
    const page= req.params.page;
    const page_size = req.params.page_size;

    db.Categorie.findAndCountAll(
        {
            offset: parseInt((page -1) * page_size),
            limit: parseInt(page_size),
        }
    ).then((Categories)=>{
        res.send({
            Categories: Categories.rows,
            NombreDepages: Math.ceil(Categories.count / page_size)
        });
    })
    .catch((err)=>{
        next(err);
    });
}
//rechercher
exports.getCategorieParNom= (req, res, next) => {
   

}

exports.getCategories = (req,res,next) => {
    db.Categorie.findAll().then((Categories)=>{
        res.send(Categories);
    })
    .catch((err)=>{
        next(err);
    });
}

exports.getCategorieByName = (req,res,next) =>{
    db.Categorie.findOne({where:{nom_categorie:req.params.nom}})
    .then(Categorie => {
        res.send(Categorie);
    })
    .catch(err => {
        next(err);
    });
}

exports.getCategorie = (req,res,next) =>{
    db.Categorie.findOne({where:{id:req.params.id}})
    .then(Categorie => {
        res.send(Categorie);
    })
    .catch(err => {
        next(err);
    });
}

exports.UpdateCategorie = (req,res,next)=>{
    db.Categorie.update({ nom_categorie:req.body.nom_categorie },{ where:{id:req.params.id}})
    .then((Categorie)=>{
        res.send({message:'Categorie est modifié avec succès'});
    })
    .catch(err => {
        next(err);
    })
}

exports.deleteCategorie = (req,res,next)=>{
    db.Categorie.destroy({where : {id: req.params.id}})
    .then(()=>{
        res.send({message:'Categorie est supprimé avec succès'});
    })
    .catch(err => {
        next(err);
    })
}


//obtient les meilleurs produits dans une catégorie spécifique 
exports.getCategorieMeilleursProduits = async (req,res,next) => {
    const cat = await db.Categorie.findOne({
        where:{
            nom_categorie:req.params.nom
        }
    });
    if(!cat){
        return res.send('categorie n\' exist pas');
    }
    const produits = await cat.getProduits({
        include:[{
            model:db.Produit_image,
            where:{
                estPrincipale:1
            }
        },{
            model:db.Categorie
        }],
        limit:3
    });
    res.send(produits);
}


//obtient les produits dans une catégorie spécifique 
exports.getCategorieProduits = async (req,res,next) => {
    const page= req.params.page;
    const page_size = req.params.page_size;

    const cat = await db.Categorie.findOne({
        where:{
            nom_categorie:req.params.nom
        }
    });
    if(!cat){
        return res.send('categorie n\' exist pas');
    }
    const produits = await cat.getProduits({
        include:[{
            model:db.Produit_image,
            where:{
                estPrincipale:1
            }
        },{
            model:db.Categorie
        }],
        offset: parseInt((page -1) * page_size),
        limit: parseInt(page_size),
    });

    const NombreDeProduits = await db.Produit.count({
        where:{
            CategorieId:cat.id
        }
    });
    res.send({produits,NombreDeProduits});
}