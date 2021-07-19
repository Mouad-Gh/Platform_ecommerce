const db = require("../models");
const bcrypt = require("bcrypt");
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

exports.getUtilisateursByPage = (req, res)=>{
    const page= req.params.page;
    const page_size = req.params.page_size;

    db.Utilisateur.findAll(
        {
            offset: parseInt((page -1) * page_size),
            limit: parseInt(page_size),
        }
    ).then((Utilisateurs)=>{
        db.Utilisateur.count()
        .then((count)=>{
            let utilisateurs = Utilisateurs.map((u)=> {
                return {id:u.id,Utilisateur:u};
            });
            res.send({utilisateurs,NombreDeLigne:count});
        })
    })
    .catch((err)=>{
        next(err);
    });
}

exports.getUtilisateur = (req, res) => {
    const idRecherche = req.params.id;
    db.Utilisateur.findOne({ where: { id: idRecherche } }).then((utilisateur) => {
        res.send(utilisateur);
    });
};

exports.updateUtilisateur = (req, res) => {
    const idRecherche = req.params.id;
    db.Utilisateur.findOne({ where: { id: idRecherche } }).then((utilisateur) => {
        utilisateur.Adress = req.body.Adress;
        utilisateur.Nom = req.body.Nom;
        utilisateur.Prenom = req.body.Prenom;
        utilisateur.Sexe = req.body.Sexe;
        utilisateur.DateNaissance = req.body.DateNaissance;
        utilisateur.Email = req.body.Email;
        utilisateur.save();
    }).then(() => {
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

exports.deleteUtilisateur = (req, res) => {
    const idRecherche = req.params.id;
    db.Utilisateur.destroy({ where: { id: idRecherche } }).then(() => {
        res.send('succees');
    });
};

exports.updateMotDePasse = (req, res, next) => {
    const idRecherche = req.params.id;
    db.Utilisateur.findOne({ where: { id: idRecherche } }).then((utilisateur) => {
        const result = bcrypt.compareSync(req.body.MdpOld, utilisateur.Mdp);
        if (result) {
            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(req.body.Mdp, salt, function (err, hash) {
                    utilisateur.Mdp = hash;
                    utilisateur.save();
                });
            });
        }
        return result;
    }).then((success) => {
        res.send({ success });
    }).catch((err) => {
        next(err);
    })
};
