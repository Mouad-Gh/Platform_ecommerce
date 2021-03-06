const db=require("../models");

exports.addMarque = (req,res,next)=>{
    db.Marque.create(req.body)
    .then(()=>{
        res.send('succes');
    })
    .catch((err)=>{
        next(err);
    });
}

exports.getMarquesByPage = (req,res,next) => {
    const page= req.params.page;
    const page_size = req.params.page_size;

    db.Marque.findAndCountAll(
        {
            offset: parseInt((page -1) * page_size),
            limit: parseInt(page_size),
        }
    ).then((marques)=>{
        res.send({
            Marques: marques.rows,
            NombreDepages: Math.ceil(marques.count / page_size)
        });
    })
    .catch((err)=>{
        next(err);
    });
}

exports.getMarques = (req,res,next) => {
    db.Marque.findAll().then((marques)=>{
        res.send(marques);
    })
    .catch((err)=>{
        next(err);
    });
}

exports.getMarque = (req,res,next) =>{
    db.Marque.findOne({where:{id: req.params.id}})
    .then(marque => {
        res.send(marque);
    })
    .catch(err => {
        next(err);
    });
}
//rechercher
exports.getMarqueByName = (req,res,next) =>{
    db.Marque.findOne({where:{nom:req.params.nom}})
    .then(marque => {
        res.send(marque);
    })
    .catch(err => {
        next(err);
    });
}
exports.updateMarque = (req,res,next)=>{
    db.Marque.update({ nom:req.body.nom,pays:req.body.pays },{ where:{id:req.params.id}})
    .then(()=>{
        res.send('succes');
    })
    .catch(err => {
        next(err);
    })
}

exports.deleteMarque = (req,res,next)=>{
    db.Marque.destroy({where : {id: req.params.id}})
    .then(()=>{
        res.send('succes');
    })
    .catch(err => {
        next(err);
    })
}