const db=require("../models");

exports.addBoutique = (req,res,next)=>{
    db.Boutique.create(req.body)
    .then(()=>{
        res.send({message:'Boutique ajouté avec succès!'});
    })
    .catch((err)=>{
        next(err);
    });
}

exports.getBoutiquesByPage = (req,res,next) => {
    const page= req.params.page;
    const page_size = req.params.page_size;

    db.Boutique.findAll(
        {
            offset: parseInt((page -1) * page_size),
            limit: parseInt(page_size),
        }
    ).then((Boutiques)=>{
        res.send(Boutiques);
    })
    .catch((err)=>{
        next(err);
    });
}

exports.getBoutiques = (req,res,next) => {
    db.Boutique.findAll({include: {
        all: true
      }
    }).then((Boutiques)=>{
        res.send(Boutiques);
    })
    .catch((err)=>{
        next(err);
    });
}

exports.getBoutique = (req,res,next) =>{
    db.Boutique.findOne({
        where:{id:req.params.id},
        include: [{
            model: db.Produit,
            include: db.Produit_image
          },{
              model: db.Vendeur
            }]
        
    })
    .then(Boutique => {
        res.send(Boutique);
    })
    .catch(err => {
        next(err);
    });
}

exports.UpdateBoutique = (req,res,next)=>{
    db.Boutique.update({ 
        nom_boutique:req.body.nom_boutique,
        VendeurId:req.body.VendeurId
    },{ where:{id:req.params.id}})
    .then((Boutique)=>{
        res.send({message:'Boutique est modifié avec succès'});
    })
    .catch(err => {
        next(err);
    })
}

exports.deleteBoutique = (req,res,next)=>{
    db.Boutique.destroy({where : {id: req.params.id}})
    .then(()=>{
        res.send({message:'Boutique est supprimé avec succès'});
    })
    .catch(err => {
        next(err);
    })
}