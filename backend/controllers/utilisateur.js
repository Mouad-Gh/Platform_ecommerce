const db = require("../models");
const Utils = require('../lib/Utils');
exports.addUtilisateur = (req, res, next) => {
    db.Utilisateur.create(req.body).then(() => {
        res.send('Utilisateur ajouté avec succès!');
    }).catch(err => {
        console.log(err);
    });
};

exports.getUtilisateurs = (req, res) => {
    const pageNum = Number.parseInt(req.query.page);
    const sizeNum = Number.parseInt(req.query.size);
    let page = 0;
    if (!Number.isNaN(pageNum) && pageNum > 0) {
        page = pageNum;
    }
    let size = 8;
    if (!Number.isNaN(sizeNum) && sizeNum > 0 && sizeNum < 16) {
        size = sizeNum;
    }


    db.Utilisateur.findAndCountAll({
        limit: size,
        offset: page * size
    }).then((utilisateurs) => {
        res.send({
            utilisateurs: utilisateurs.rows,
            NombreDeLigne: Math.ceil(utilisateurs.count / size)
        });
    }).catch((err) => {
        console.log(err);
        res.status(500).send('try again later');
    });
};

exports.getUtilisateursByPage = async (req, res) => {
    const page = req.params.page;
    const page_size = req.params.page_size;

    db.Utilisateur.findAll(
        {
            offset: parseInt((page - 1) * page_size),
            limit: parseInt(page_size),
        }
    ).then(async (Utilisateurs) => {
        db.Utilisateur.count()
            .then(async (count) => {
                let utilisateurs = await Promise.all(Utilisateurs.map(async (u) => {
                    let admin = await u.getAdmin();
                    if (admin) {
                        return { id: admin.id, Utilisateur: u, role: 'Admin' };
                    }
                    let acheteur = await u.getAcheteur();
                    if (acheteur) {
                        let vendeur = await acheteur.getVendeur();
                        if (vendeur) {
                            return { id: vendeur.id, Utilisateur: u, role: 'Vendeur' };
                        }
                        else {
                            return { id: acheteur.id, Utilisateur: u, role: 'Acheteur' };
                        }

                    }
                }));
                res.send({ utilisateurs, NombreDeLigne: count });
            })
    })
        .catch((err) => {
            next(err);
        });
}

exports.getUtilisateur = (req, res) => {
    const idRecherche = req.user.id;
    db.Utilisateur.findOne({ where: { id: idRecherche } }).then((utilisateur) => {
        res.send(utilisateur);
    });
};




exports.updateUtilisateur = (req, res) => {
    const idRecherche = req.user.id;
    db.Utilisateur.findOne({ where: { id: idRecherche } }).then((utilisateur) => {
        utilisateur.Adress = req.body.Adress;
        utilisateur.Nom = req.body.Nom;
        utilisateur.Prenom = req.body.Prenom;
        utilisateur.Sexe = req.body.Sexe;
        utilisateur.DateNaissance = req.body.DateNaissance;
        utilisateur.Email = req.body.Email;
        utilisateur.save().then(() => {
            res.send({ message: 'succees' });
        });
    })
};

//pour admin
exports.getUtilisateur2 = (req, res) => {
    const idRecherche = req.params.id;
    db.Utilisateur.findOne({ where: { id: idRecherche } }).then((utilisateur) => {
        res.send(utilisateur);
    });
};
//pour admin
exports.updateUtilisateur2 = (req, res) => {
    const idRecherche = req.params.id;
    db.Utilisateur.findOne({ where: { id: idRecherche } }).then((utilisateur) => {
        utilisateur.Adress = req.body.Adress;
        utilisateur.Nom = req.body.Nom;
        utilisateur.Prenom = req.body.Prenom;
        utilisateur.Sexe = req.body.Sexe;
        utilisateur.DateNaissance = req.body.DateNaissance;
        utilisateur.Email = req.body.Email;
        utilisateur.save().then(() => {
            res.send({ message: 'succees' });
        });
    })
};

exports.findUtilisateur = (req, res, next) => {
    const page = req.params.page;
    const page_size = req.params.page_size;
    db.Utilisateur.findAll({
        where: {
            Nom: req.query.Nom,
            Prenom: req.query.Prenom
        },
        offset: parseInt((page - 1) * page_size),
        limit: parseInt(page_size),
    }).then((Utilisateurs) => {
        let utilisateurs = Utilisateurs.map((u) => {
            return { id: u.id, Utilisateur: u };
        });
        res.send({ utilisateurs, NombreDeLigne: utilisateurs.length });
    })

}


/*
    exports.updateUtilisateur = async (req, res)=>{
    const idRecherche=req.params.id;
    const utilisateur= await db.Utilisateur.findOne({where : {id: idRecherche}});
        utilisateur.Adress=req.body.Adress;
        await utilisateur.save();
        res.send('succees');
    };
 */

exports.deleteUtilisateur = async (req, res) => {
    const idRecherche = req.params.id;
    const u = await db.Utilisateur.findByPk(idRecherche);
    const ad = await u.getAdmin();
    const ach = await u.getAcheteur();
    if (ad) {
        await ad.destroy();
        await u.destroy();
    }
    else if (ach) {
        const vendeur = await ach.getVendeur();
        if (vendeur) {
            await vendeur.destroy();
        }
        await ach.destroy();
        await u.destroy();
    }
    db.Utilisateur.destroy({ where: { id: idRecherche } }).then(() => {
        res.send({ message: 'succees' });
    });
};

exports.updateMotDePasse = (req, res, next) => {
    const idRecherche = req.user.id;
    db.Utilisateur.findOne({ where: { id: idRecherche } }).then((utilisateur) => {
        const result = Utils.mdpEstValide(req.body.MdpOld, utilisateur.Mdp);
        if (result) {

            utilisateur.Mdp = Utils.genHash(req.body.Mdp);
            utilisateur.save();
        }
        return result;
    }).then((success) => {
        res.send({ success });
    }).catch((err) => {
        next(err);
    })
};
