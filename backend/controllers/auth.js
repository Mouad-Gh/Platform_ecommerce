const Utils = require('../lib/Utils');
const {sequelize,Utilisateur} = require('../models');

exports.login = (req,res,next)=>{
    Utilisateur.findOne({
        where:{
            Email:req.body.Email
        }
    })
    .then((utilisateur)=>{
        if(!utilisateur){
            res.status(400).json({
                message:'E-mail n\'existe pas',
            });
        }
        const mdpEstValide = Utils.mdpEstValide(req.body.Mdp,utilisateur.Mdp);
        if(mdpEstValide){
            const token = Utils.creerJWT(utilisateur);
            res.json({
                utilisateur : {
                    Nom: utilisateur.Nom,
                    Prenom: utilisateur.Prenom,
                    Sexe: utilisateur.Sexe,
                    DateNaissance: utilisateur.DateNaissance,
                    Adress: utilisateur.Adress,
                    Email: utilisateur.Email,
                },
                token : token
            });
        }
        else{
            res.send({
                message:"Mot de passe incorrect",
                token:null
            });
        }
    })
    .catch((err) => {
        next(err);
    });
}

exports.inscription = (req,res,next)=>{
    Utilisateur.create({
        Adress : req.body.Adress,
        Nom : req.body.Nom,
        Prenom : req.body.Prenom,
        Sexe : req.body.Sexe,
        DateNaissance : req.body.DateNaissance,
        Email : req.body.Email,
        Mdp  : Utils.genHash(req.body.Mdp)
    })
    .then((u)=>{
        res.send({ message: "succes" });
    })
    .catch(err=>{
        next(err);
    })
}