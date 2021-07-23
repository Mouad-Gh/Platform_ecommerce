const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const {Utilisateur} = require('../models');

const options = {
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:'LPDW'
}

module.exports = (passport) => {
    passport.use(new JwtStrategy(options,function(jwt_payload,done){
        console.log(jwt_payload.id);

        Utilisateur.findByPk(jwt_payload.id)
        .then(utilisateur => {
            if(!utilisateur){
                return done(null, false);
            }
            else {
                return done(null, utilisateur);
            }
            
        })
        .catch(err => {
            return done(err, false);
        });
        
    }));
}