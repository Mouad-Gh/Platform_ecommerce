const db=require("../models");

exports.addCommande = (req,res,next)=>{
    db.Commande.create(req.body)
    .then((commande)=>{
        req.body.produits.forEach(produit=>{
            db.Produit.findByPk(produit.id).then(prod=>{
                commande.addProduit(prod,{through: { quantite: produit.qte }}).then(()=>{
                    prod.decrement({'quantite_dispo' : produit.qte});
                });

            });
        });
        
        res.send({message:'Commande ajouté avec succès!'});
    })
    .catch((err)=>{
        next(err);
    });
}

exports.getCommandesByPage = (req,res,next) => {
    const page= req.params.page;
    const page_size = req.params.page_size;

    db.Commande.findAll(
        {
            offset: parseInt((page -1) * page_size),
            limit: parseInt(page_size),
        }
    ).then((Commandes)=>{
        res.send(Commandes);
    })
    .catch((err)=>{
        next(err);
    });
}

exports.getCommandes = (req,res,next) => {
    db.Commande.findAll({include: {
        all: true}
      }).then((Commandes)=>{
        res.send(Commandes);
    })
    .catch((err)=>{
        next(err);
    });
}

exports.getCommande = (req,res,next) =>{
    db.Commande.findOne({where:{id:req.params.id}})
    .then(Commande => {
        res.send(Commande);
    })
    .catch(err => {
        next(err);
    });
}

exports.UpdateCommande = (req,res,next)=>{
    db.Commande.update({ 
        date:req.body.date,
        AcheteurId:req.body.AcheteurId
    },{ where:{id:req.params.id}})
    .then((Commande)=>{
        res.send({message:'Commande est modifié avec succès'});
    })
    .catch(err => {
        next(err);
    })
}

exports.deleteCommande = (req,res,next)=>{
    db.Commande.destroy({where : {id: req.params.id}})
    .then(()=>{
        res.send({message:'Commande est supprimé avec succès'});
    })
    .catch(err => {
        next(err);
    })
}
