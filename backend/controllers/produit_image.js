const db= require("../models");

exports.addProduit_image= (req,res)=>{
    db.Produit_image.create(req.body).then(()=>{
        res.send("succes");
    });
};

exports.getProduit_images= (req,res)=>{
    db.Produit_image.findAndCountAll().then((images)=>{
        res.send(images);
    });
};

//chercher l'image principale pour un produit 
exports.getProduit_imagePrincipale= (req,res)=>{
    const produitId=req.params.id;
    db.Produit_image.findOne({where : {estPrincipale: true, ProduitId: produitId}}).then((image)=>{
        res.send(image);
    });
};



//modifier l'url d'une image
exports.updateProduit_image= (req,res)=>{
    const idRecherche=req.params.id;
    db.Produit_image.findByPk(idRecherche).then((image)=>{
        image.chemin_fichier=req.body.Url;
        image.save();
    }).then(()=>{
        res.send('succes');
    });
};

//modifier l'image principal d'un produit
exports.updateProduit_imagePrincipale= (req,res)=>{
    const produitId=req.params.id;
    const imageId=req.body.id;
    const imageP=getProduit_imagePrincipale(req,res);
    imageP.estPrincipale=true;
    imageP.save();
    db.Produit_image.findOne({where : {id: imageId, ProduitId: produitId}}).then((image)=>{
        image.estPrincipale=true;
        image.save();
    });
}

//supprimer l'image avec l'id recherchee
exports.deleteProduit_image= (req,res)=>{
    const idRecherche=req.params.id;
    db.Produit_image.destroy({where : {id: idRecherche}}).then(()=>{
        res.send('succees');
    });
};

