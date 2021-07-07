const Produit= require('./Produit');
module.exports= (sequelize,DataTypes)=>{
    const Produit_image= sequelize.define('Produit_image',{
        chemin_fichier: {
            type: DataTypes.STRING,
            allowNull: false
          },
          estPrincipale: {
            type: DataTypes.TINYINT,
            allowNull: false
          }
    });
   // Produit_image.belongsTo(Produit);
    return Produit_image;
};