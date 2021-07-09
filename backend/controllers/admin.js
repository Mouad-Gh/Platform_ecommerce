const db=require("../models");
const utilisateur=require("../controllers/utilisateur");

exports.addAdmin = (req,res,next)=>{
    db.Utilisateur.create(req.body)
    .then((Utilisateur)=>{
        db.Admin.create({UtilisateurId:Utilisateur.id}).then(()=>{
            res.send('Admin ajouté avec succès!');
        })
        .catch((err)=>{
            next(err);
        });
    })
    .catch((err)=>{
        next(err);
    });
}

exports.getAdminsByPage = (req,res,next) => {
    const page= req.params.page;
    const page_size = req.params.page_size;

    db.Admin.findAll(
        {
            include:['Utilisateur'],
            attributes:['id'],
            offset: parseInt((page -1) * page_size),
            limit: parseInt(page_size),
        }
    ).then((Admins)=>{
        res.send(Admins);
    })
    .catch((err)=>{
        next(err);
    });
}

exports.getAdmins = (req,res,next) => {
    db.Admin.findAll({
        include:['Utilisateur'],
        attributes:['id']
    }).then((Admins)=>{
        res.send(Admins);
    })
    .catch((err)=>{
        next(err);
    });
}

exports.getAdmin = (req,res,next) =>{
    db.Admin.findByPk(req.params.id)
    .then(Admin => {
        Admin.getUtilisateur().then((utilisateur)=>{
            res.send(utilisateur);
        });
    })
    .catch(err => {
        next(err);
    });
}

exports.UpdateAdmin = (req,res,next)=>{
    db.Admin.findByPk(req.params.id)
    .then((admin)=>{
        req.params.id=admin.UtilisateurId;
        utilisateur.updateUtilisateur(req,res);
    })
    .catch(err => {
        next(err);
    })
}

exports.deleteAdmin = (req,res,next)=>{
    db.Admin.findByPk(req.params.id).then((admin)=>{
        db.Admin.destroy({where : {id: req.params.id}})
        .then(()=>{
            req.params.id=admin.UtilisateurId;
            utilisateur.deleteUtilisateur(req,res);
        })
        .catch(err => {
            next(err);
        });
    });
}