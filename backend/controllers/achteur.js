const db=require("../models");

exports.addAchteur = (req,res,next)=>{
    db.Acheteur.create(req.body)
    .then(()=>{
        res.send({message:'Acheteur ajouté avec succès!'});
    })
    .catch((err)=>{
        next(err);
    });
}

exports.getAcheteursByPage = (req,res,next) => {
    const page= req.params.page;
    const page_size = req.params.page_size;

    db.Acheteur.findAll(
        {
            offset: parseInt((page -1) * page_size),
            limit: parseInt(page_size),
        }
    ).then((Achteurs)=>{
        res.send(Achteurs);
    })
    .catch((err)=>{
        next(err);
    });
}

exports.getAcheteurs = (req,res,next) => {
    db.Acheteur.findAll().then((Achteurs)=>{
        res.send(Achteurs);
    })
    .catch((err)=>{
        next(err);
    });
}

exports.getAcheteur = (req,res,next) =>{
    db.Acheteur.findOne({where:{id:req.params.id}})
    .then(Achteur => {
        res.send(Achteur);
    })
    .catch(err => {
        next(err);
    });
}

exports.UpdateAchteur = (req,res,next)=>{
    db.Acheteur.update({ UtilisateurId:req.body.UtilisateurId },{ where:{id:req.params.id}})
    .then((achteur)=>{
        res.send({message:'Acheteur est modifié avec succès'});
    })
    .catch(err => {
        next(err);
    })
}

exports.deleteAchteur = (req,res,next)=>{
    db.Acheteur.destroy({where : {id: req.params.id}})
    .then(()=>{
        res.send({message:'Acheteur est supprimé avec succès'});
    })
    .catch(err => {
        next(err);
    })
}