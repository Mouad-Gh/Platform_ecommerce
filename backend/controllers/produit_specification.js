const db= require("../models");

exports.addProduit_specification= (req,res)=>{
    db.Produit_specification.create(req.body).then(()=>{
        res.send("succes");
    });
};
//
exports.addProduit_specifications= (req,res)=>{
    const specifications=JSON.parse(req.body.specifications);
    specifications.map(specification=>{
        db.Produit_specification.create({
            nom: specification.nom,
            valeur: specification.valeur,
            ProduitId: req.body.ProduitId
        }).then(()=>{
           // res.send("succes");
        })
    })
    
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



//modifier toutes les specifications d'un produit 
exports.updateProduit_specifications= (req,res,next)=>{
    console.log(req.body.specifications);
    const specifications = req.body.specifications;
    if(specifications.length>0){
        specifications.map(specification => {
            const {id,nom,valeur}=specification;
            if(id){
                db.Produit_specification.update({ nom, valeur }, { where: { id } }).then(() => {
                   
                });
            }
            //si cette specification n'est pas deja creer on va le creer
            else{
                db.Produit_specification.create({
                    nom,
                    valeur,
                    ProduitId: req.params.id
                }).then(()=>{
                   // res.send("succes");
                })
            }
            
        });
    }
    
};

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

