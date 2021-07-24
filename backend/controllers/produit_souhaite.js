const db = require("../models");


exports.getProduits_Souhaites = async (req, res, next) => {
    db.Acheteur.findOne({where:{UtilisateurId:req.user.id}}).then(async (achteur) => {
        const produits = await achteur.getProduits({
            include: ['Categorie', {
                model: db.Produit_image,
                where: {
                    estPrincipale: 1
                }
            }]
        });
        res.send(produits);
    })
        .catch((err) => {
            next(err);
        });
}

exports.supprimerProduits_Souhaites = async (req, res, next) => {
    db.Acheteur.findOne({where:{UtilisateurId:req.user.id}}).then(async (achteur) => {
        let produits = await achteur.getProduits({
            where: {
                id: req.params.id
            }
        });
        await achteur.removeProduit(produits[0]);
        produits = await achteur.getProduits({
            include: ['Categorie', {
                model: db.Produit_image,
                where: {
                    estPrincipale: 1
                }
            }]
        });
        res.send(produits);
    })
        .catch((err) => {
            next(err);
        });
}


exports.ajouterProduits_Souhaites = async (req, res, next) => {
    db.Acheteur.findOne({where:{UtilisateurId:req.user.id}}).then(async (achteur) => {
        let produit =await db.Produit.findByPk(req.body.ProduitId);
        const response = await achteur.addProduit(produit);
        if(response){
            res.send({message:'Le produit est ajouté avec succès',isAdded:true});
        }
        else{
            res.send({message:'Le produit existe déjà dans votre page de liste de souhaits',isAdded:false},);
        }
        
    })
        .catch((err) => {
            next(err);
        });
}
