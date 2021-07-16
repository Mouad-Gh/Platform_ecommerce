const db= require("../models");
const acheteur = require("./achteur");

/** 
 * db.Vendeur.create({
        Acheteur:{
            Utilisateur:req.body
        },
        Boutiques:[{
            nom_boutique:req.body.nom_boutique
        }]
    }).then((a)=>{
        res.send(a);
    });
 */
exports.addVendeur= (req,res,next)=>{

    //ajouter un seul boutique avec le nouveau vendeur
    db.Utilisateur.create(req.body).then((utilisateur)=>{
        db.Acheteur.create({UtilisateurId:utilisateur.id}).then((acheteur)=>{
            db.Vendeur.create({AcheteurId:acheteur.id}).then((vendeur)=>{
                db.Boutique.create({
                    VendeurId: vendeur.id,
                    nom_boutique: req.body.nom_boutique
                }).then((a)=>{
                    res.send('succes'+vendeur);
                })
                
            })
            .catch((err)=>{
                next(err);
            });
        });
    }).catch((err)=>{
        next(err);
    });

    
    
};

exports.getVendeurs= (req,res,next)=>{
    db.Vendeur.findAll({
        include: [{
          model: db.Acheteur,
          include: db.Utilisateur
        },{
            model: db.Boutique
          }]
      }).then((Vendeurs)=>{
        res.send(Vendeurs);
    }).catch((err)=>{
        next(err);
    });
};

exports.getVendeur= (req,res)=>{
    db.Vendeur.findOne({
        where : {id: req.params.id},
        include: {
          model: db.Acheteur,
          include: db.Utilisateur,
          required: true
        }
      }).then((Vendeurs)=>{
        res.send(Vendeurs);
    });
};

exports.updateVendeur= (req,res,next)=>{
    db.Vendeur.findByPk(req.params.id).then((vendeur)=>{
        req.params.id=vendeur.UtilisateurId;
        acheteur.UpdateAchteur(req,res,next);
    })
    .catch(err => {
        next(err);
    });
}

exports.deleteVendeur= (req,res,next)=>{
    db.Vendeur.findByPk(req.params.id).then((vendeur)=>{
        db.Vendeur.destroy({where : {id: req.params.id}})
        .then(()=>{
            req.params.id=vendeur.AcheteurId;
            acheteur.deleteAchteur(req,res);
            res.send('succees');
        })
        .catch(err => {
            next(err);
        });
    });
   
};