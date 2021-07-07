const Utilisateur= require('./Utilisateur');
module.exports= (sequelize,DataTypes)=>{
    const Vendeur= sequelize.define('Vendeur',{

    });
    //Vendeur.belongsTo(Utilisateur);
    return Vendeur;
};