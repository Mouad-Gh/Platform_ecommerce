const db= require("../models");

exports.addVendeur= (req,res)=>{
    db.Vendeur.create(req.body).then(()=>{
        res.send('succes');
    });
};

exports.getVendeurs= (req,res)=>{
    db.Vendeur.findAll({
        include: {
          model: Acheteur,
          required: true
        }
      }).then((Vendeurs)=>{
        res.send(Vendeurs);
    });
};

exports.getVendeur= (req,res)=>{
    db.Vendeur.findOne({
        where : {id: req.params.id},
        include: {
          model: Acheteur,
          required: true
        }
      }).then((Vendeurs)=>{
        res.send(Vendeurs);
    });
};

exports.updateVendeur= (req,res,next)=>{
    const {}=req.body;
    db.Vendeur.update({ },{ where:{id:req.params.id}})
    .then((Vendeur)=>{
        res.send('succes');
    })
    .catch(err => {
        next(err);
    })
}

exports.deleteVendeur= (req,res)=>{
    const idRecherche=req.params.id;
    db.Vendeur.destroy({where : {id: idRecherche}}).then(()=>{
        res.send('succees');
    });
};