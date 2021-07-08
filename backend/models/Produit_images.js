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

    Produit_image.associate= models =>{
      
        //chaque Produit_image appartient a un Produit
        Produit_image.belongsTo(models.Produit);
    
    };


    return Produit_image;
};