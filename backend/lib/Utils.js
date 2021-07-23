const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

function mdpEstValide(mdp,hash){
    return bcrypt.compareSync(mdp,hash);
}


function genHash(mdp){
    return bcrypt.hashSync(mdp,8);
}

function creerJWT(utilisateur){
    const id = utilisateur.id;
    const expiresIn = '1d';


    const payload = {
        id: id,
        iat: Date.now()
    };

    const token =jsonwebtoken.sign(payload,'LPDW',{expiresIn:expiresIn});

    return {
        token: "Bearer " + token,
        expires: expiresIn
    }

}

module.exports.mdpEstValide = mdpEstValide;
module.exports.genHash = genHash;
module.exports.creerJWT = creerJWT;