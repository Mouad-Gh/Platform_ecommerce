const Utilisateur= require('./Utilisateur');
module.exports= (sequelize,DataTypes)=>{
    const Boutique= sequelize.define('Boutique',{
        nom_boutique: {
            type: DataTypes.STRING(45),
            allowNull: false
          }
    });
    //Boutique.belongsTo(Utilisateur);

    Boutique.associate= models =>{
      
        //chaque Boutique contient plusieurs Produits
        Boutique.hasMany(models.Produit,{
            onDelete: "cascade"
        });
        //chaque Boutique appartient a un Vendeur
        Boutique.belongsTo(models.Vendeur);
    
      };

    return Boutique;
};