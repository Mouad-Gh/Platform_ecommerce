const {Utilisateur} = require("../models");

isAdmin = (req, res, next)=>{

    Utilisateur.findByPk(req.user.id)
    .then(u => {
        u.getAdmin()
        .then(admin =>{
            if(admin){
                next();
                return;
            }
            res.status(403).send({
                message: "Exiger le rôle d'administrateur !"
            });
        })
    })
}

isVendeur = (req, res, next)=>{

    Utilisateur.findByPk(req.user.id)
    .then(u => {
        u.getAcheteur()
        .then(acheteur =>{
            if(acheteur && acheteur?.getVendeur()){
                next();
                return;
            }
            res.status(403).send({
                message: "Exiger le rôle de vendeur!"
            });
        })
    })
}

const authJwt = {
    isAdmin: isAdmin,
    isVendeur:isVendeur
};
module.exports = authJwt;