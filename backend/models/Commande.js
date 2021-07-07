const Utilisateur= require('./Utilisateur');
module.exports= (sequelize,DataTypes)=>{
    const Commande= sequelize.define('Commande',{
        date: {
            type: DataTypes.DATE,
            allowNull: false
          }
    });
    //Commande.belongsTo(Utilisateur);
    return Commande;
};