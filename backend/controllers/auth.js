const Utils = require('../lib/Utils');
const {sequelize,Utilisateur} = require('../models');

exports.login = (req,res,next)=>{
    Utilisateur.findOne({
        where:{
            Email:req.body.Email
        }
    })
    .then(async (utilisateur)=>{

        if(!utilisateur){
            res.status(400).json({
                message:'E-mail n\'existe pas',
            });
            return;
        }
        const mdpEstValide = Utils.mdpEstValide(req.body.Mdp,utilisateur.Mdp);
        if(mdpEstValide){
            const token = Utils.creerJWT(utilisateur);
            let u = {
                id:utilisateur.id,
                Nom: utilisateur.Nom,
                Prenom: utilisateur.Prenom,
                Sexe: utilisateur.Sexe,
                DateNaissance: utilisateur.DateNaissance,
                Adress: utilisateur.Adress,
                Email: utilisateur.Email,
            };
            const acheteur = await utilisateur.getAcheteur();
            
            if(acheteur){
                const vendeur = await acheteur.getVendeur();
                if(vendeur){
                    u.role = 'vendeur';
                    u.vendeurId=vendeur.id;
                }
                else{
                    u.role = 'acheteur';
                }
                    
                    u.acheteurId=acheteur.id;
                
            }
            const admin = await utilisateur.getAdmin();
            if(admin){
                u.role = 'admin';
                u.adminId=admin.id;
            }
            res.json({
                utilisateur:u,
                token : token
            });
        }
        else{
            res.status(400).json({
                message:'Mot de passe incorrect',
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