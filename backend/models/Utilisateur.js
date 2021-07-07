const bcrypt = require("bcrypt");
const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize,DataTypes)=>{
    const Utilisateur = sequelize.define('Utilisateur',{
        Nom: {
            type : DataTypes.STRING,
            allowNull: false
        },
        Prenom: {
            type : DataTypes.STRING,
            allowNull: false
        },
        Sexe: {
            type : DataTypes.STRING
        },
        DateNaissance:{
            type: DataTypes.DATE
        },
        Adress: {
            type : DataTypes.STRING
        },
        Email: DataTypes.STRING,
        Mdp: DataTypes.STRING
    }, {
        freezeTableName: false,
        instanceMethods: {
            generateHash(mdp) {
                return bcrypt.hash(mdp, bcrypt.genSaltSync(8));
            },
            validPassword(mdp) {
                return bcrypt.compare(mdp, this.mdp);
            }
        }

    });
    return Utilisateur;
};