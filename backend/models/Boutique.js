const Utilisateur= require('./Utilisateur');
module.exports= (sequelize,DataTypes)=>{
    const Boutique= sequelize.define('Boutique',{
        nom_boutique: {
            type: DataTypes.STRING(45),
            allowNull: false
          }
    });
    //Boutique.belongsTo(Utilisateur);
    return Boutique;
};