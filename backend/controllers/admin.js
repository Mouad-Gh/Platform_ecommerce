const db=require("../models");
const utilisateur=require("../controllers/utilisateur");

exports.addAdmin = (req,res,next)=>{
    db.Admin.create(req.body)
    .then(()=>{
        res.send({message:'Admin ajouté avec succès!'});
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
    db.Admin.findAll().then((Admins)=>{
        res.send(Admins);
    })
    .catch((err)=>{
        next(err);
    });
}

exports.getAdmin = (req,res,next) =>{
    db.Admin.findOne({where:{id:req.params.id}})
    .then(Admin => {
        res.send(Admin);
    })
    .catch(err => {
        next(err);
    });
}

exports.UpdateAdmin = (req,res,next)=>{
    db.Admin.findByPk(req.params.id).then((admin)=>{
        req.params.id=admin.UtilisateurId;
        utilisateur.updateUtilisateur(req,res);
    });
}

exports.deleteAdmin = (req,res,next)=>{
    db.Admin.destroy({where : {id: req.params.id}})
    .then(()=>{
        res.send({message:'Admin est supprimé avec succès'});
    })
    .catch(err => {
        next(err);
    })
}