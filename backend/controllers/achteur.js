const db=require("../models");
const utilisateur=require("../controllers/utilisateur");

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
    db.Acheteur.findByPk(req.params.id).then((acheteur)=>{
        req.params.id=acheteur.UtilisateurId;
        utilisateur.updateUtilisateur(req,res);
    });
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