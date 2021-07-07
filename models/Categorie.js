const Utilisateur= require('./Utilisateur');
module.exports= (sequelize,DataTypes)=>{
    const Categorie= sequelize.define('Categorie',{
        nom_categorie: {
            type: DataTypes.STRING(45),
            allowNull: false
          }
    });
    //Categorie.belongsTo(Utilisateur);
    return Categorie;
};