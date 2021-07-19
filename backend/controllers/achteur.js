const db = require("../models");
const utilisateur = require("../controllers/utilisateur");


exports.addAchteur = (req, res, next) => {
    db.Utilisateur.create(req.body)
        .then((Utilisateur) => {
            db.Acheteur.create({ UtilisateurId: Utilisateur.id }).then((a) => {
                res.send(a);
            })
                .catch((err) => {
                    next(err);
                });
        })
        .catch((err) => {
            next(err);
        });
}

exports.findAcheteurs = (req, res, next) => {
    const page = req.params.page;
    const page_size = req.params.page_size;
    db.Acheteur.findAll({
        include: [{
            model: db.Utilisateur,
            where: {
                Nom: req.query.Nom,
                Prenom: req.query.Prenom
            },
        }],
        offset: parseInt((page - 1) * page_size),
        limit: parseInt(page_size),
        attributes: ['id']
    }).then((Acheteurs) => {

        res.send({ utilisateurs: Acheteurs, NombreDeLigne: Acheteurs.length });
    })

}

exports.getAcheteursByPage = (req, res, next) => {
    const page = req.params.page;
    const page_size = req.params.page_size;

    db.Acheteur.findAll(
        {
            include: ['Utilisateur'],
            attributes: ['id'],
            offset: parseInt((page - 1) * page_size),
            limit: parseInt(page_size),
        }
    ).then((Acheteurs) => {
        db.Acheteur.count()
            .then((count) => {
                res.send({ utilisateurs: Acheteurs, NombreDeLigne: count });
            })
    })
        .catch((err) => {
            next(err);
        });
}

exports.getAcheteurs = (req, res, next) => {
    db.Acheteur.findAll({
        include: ['Utilisateur'],
        attributes: ['id']
    }).then((Acheteurs) => {
        res.send(Acheteurs);
    })
        .catch((err) => {
            next(err);
        });
}

exports.getAcheteur = (req, res, next) => {
    db.Acheteur.findByPk(req.params.id)
        .then(Achteur => {
            Achteur.getUtilisateur().then((utilisateur) => {
                res.send(utilisateur);
            });
        })
        .catch(err => {
            next(err);
        });
}

exports.UpdateAchteur = (req, res, next) => {
    db.Acheteur.findByPk(req.params.id).then((acheteur) => {
        req.params.id = acheteur.UtilisateurId;
        utilisateur.updateUtilisateur(req, res);
    })
        .catch(err => {
            next(err);
        });
}

exports.deleteAchteur = (req, res, next) => {
    db.Acheteur.findByPk(req.params.id).then((acheteur) => {
        db.Acheteur.destroy({ where: { id: req.params.id } })
            .then(() => {
                req.params.id = acheteur.UtilisateurId;
                utilisateur.deleteUtilisateur(req, res);
            })
            .catch(err => {
                next(err);
            });
    });
}

exports.getAchteurCommandes = (req, res, next) => {
    db.Acheteur.findByPk(req.params.id)
        .then((achteur) => {
            achteur.getCommandes({
                include: [{
                    model: db.Produit,
                    include: ['Categorie', {
                        model: db.Produit_image,
                        where: {
                            estPrincipale: 1
                        }
                    }]
                }]
            }).then((cmds) => {
                res.send(cmds);
            });
        })
        .catch(err => {
            next(err);
        })
}