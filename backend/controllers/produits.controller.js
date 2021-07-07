const {sequelize} = require('../models');
const initModels = require("../models/init-models");
const models = initModels(sequelize);

const PAGE_SIZE = 2;

exports.allProduits=(req,res,next)=>{
    models.produit.findAll(
        {
            include:['categorie','marque'],
            attributes:['id','nom','PU','quantite_dispo','description']
        }
    )
    .then((resp)=>{
        res.send(resp);
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send('try again later');
    });
}

exports.produitsParPage=(req,res,next)=>{
    if(req.params.page <1){
        res.status(500).send({message:'page number must be positive!'});
    }
    models.produit.findAll(
        {
            offset: (req.params.page -1) * PAGE_SIZE,
            limit: PAGE_SIZE,
            include:['categorie','marque'],
            attributes:['id','nom','PU','quantite_dispo','description']
        }
    ).then((resp)=>{
        res.send(resp);
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send('try again later');
    });
}

exports.produitsParId=(req,res,next)=>{
    models.produit.findOne(
        {
            where:{
                id:req.params.id
            },
            include:['categorie','marque'],
            attributes:['id','nom','PU','quantite_dispo','description']
        }
    ).then((resp)=>{
        res.send(resp);
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send('try again later');
    });
}