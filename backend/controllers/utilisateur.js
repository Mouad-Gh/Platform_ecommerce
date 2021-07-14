const db=require("../models");

exports.addUtilisateur= (req, res,next)=>{
    db.Utilisateur.create(req.body).then(()=>{
        res.send('Utilisateur ajouté avec succès!');
    }).catch(err => {
        console.log(err);
    });
};

exports.getUtilisateurs= (req, res)=>{
    const pageNum=Number.parseInt(req.query.page);
    const sizeNum=Number.parseInt(req.query.size);
    let page=0;
    if(!Number.isNaN(pageNum)&&pageNum>0){
        page=pageNum;
    }
    let size=8;
    if(!Number.isNaN(sizeNum) && sizeNum>0 && sizeNum<16){
            size=sizeNum;
    }


    db.Utilisateur.findAndCountAll({
        limit: size,
        offset: page*size
    }).then((utilisateurs)=>{
        res.send({
            contenu: utilisateurs.rows,
            totalPages: Math.ceil(utilisateurs.count / size) 
        });
    }).catch((err)=>{
        console.log(err);
        res.status(500).send('try again later');
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
