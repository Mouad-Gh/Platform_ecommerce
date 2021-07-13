const db= require("../models");

exports.addProduit_specification= (req,res)=>{
    db.Produit_specification.create(req.body).then(()=>{
        res.send("succes");
    });
};

exports.getProduit_specifications= (req,res)=>{
    db.Produit_specification.findAndCountAll().then((specifications)=>{
        res.send(specifications);
    });
};


exports.getProduit_specification= (req,res)=>{
    const produitId=req.params.id;
    db.Produit_specification.findOne({where : { ProduitId: produitId}}).then((specification)=>{
        res.send(specification);
    });
};



//modifier l'url d'une specification
exports.updateProduit_specification= (req,res)=>{
    const idRecherche=req.params.id;
    db.Produit_specification.findByPk(idRecherche).then((specification)=>{
        specification.valeur=req.body.valeur;
        specification.save();
    }).then(()=>{
        res.send('succes');
    });
};



//supprimer l'specification avec l'id recherchee
exports.deleteProduit_specification= (req,res)=>{
    const idRecherche=req.params.id;
    db.Produit_specification.destroy({where : {id: idRecherche}}).then(()=>{
        res.send('succees');
    });
};

