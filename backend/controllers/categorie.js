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

    db.Categorie.findAll(
        {
            offset: parseInt((page -1) * page_size),
            limit: parseInt(page_size),
        }
    ).then((Categories)=>{
        res.send(Categories);
    })
    .catch((err)=>{
        next(err);
    });
}

exports.getCategories = (req,res,next) => {
    db.Categorie.findAll().then((Categories)=>{
        res.send(Categories);
    })
    .catch((err)=>{
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
        include:{
            model:db.Produit_image,
            where:{
                estPrincipale:1
            }
        },
        limit:3
    });
    res.send(produits);
}