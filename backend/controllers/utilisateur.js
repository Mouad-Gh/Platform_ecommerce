const db=require("../models");

exports.addUtilisateur= (req, res)=>{
    db.Utilisateur.create(req.body).then(()=>{
        res.send('Utilisateur ajouté avec succès!');
    });
};

exports.getUtilisateurs= (req, res)=>{
    db.Utilisateur.findAll().then((utilisateurs)=>{
        res.send(utilisateurs);
    });
};

exports.getUtilisateur= (req, res)=>{
    const idRecherche=req.params.id;
    db.Utilisateur.findOne({where : {id: idRecherche}}).then((utilisateur)=>{
        res.send(utilisateur);
    });
};

exports.updateUtilisateur= (req, res)=>{
    const idRecherche=req.params.id;
    db.Utilisateur.findOne({where : {id: idRecherche}}).then((utilisateur)=>{
        utilisateur.Adress=req.body.Adress;
        utilisateur.save();
    }).then(()=>{
        res.send('succees');
    });
};
/*
    exports.updateUtilisateur = async (req, res)=>{
    const idRecherche=req.params.id;
    const utilisateur= await db.Utilisateur.findOne({where : {id: idRecherche}});
        utilisateur.Adress=req.body.Adress;
        await utilisateur.save();
        res.send('succees');
    };
 */

exports.deleteUtilisateur= (req, res)=>{
    const idRecherche=req.params.id;
    db.Utilisateur.destroy({where : {id: idRecherche}}).then(()=>{
        res.send('succees');
    });
};
