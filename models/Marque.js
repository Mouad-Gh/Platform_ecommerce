const Utilisateur= require('./Utilisateur');
module.exports= (sequelize,DataTypes)=>{
    const Marque= sequelize.define('Marque',{
        nom: {
            type: DataTypes.STRING(45),
            allowNull: false
          },
          pays: {
            type: DataTypes.STRING(45),
            allowNull: false
          }
    });
    //Marque.belongsTo(Utilisateur);
    return Marque;
};