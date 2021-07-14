const Utilisateur= require('./Utilisateur');
module.exports= (sequelize,DataTypes)=>{
    const Commande= sequelize.define('Commande',{
        date: {
            type: DataTypes.DATE,
            allowNull: false
          },
        adress: {
            type: DataTypes.STRING,
            allowNull: false
          },
        total:{
          type: DataTypes.FLOAT,
          allowNull: false
        }
    });
    //Commande.belongsTo(Utilisateur);

    Commande.associate= models =>{
      
        //chaque Commande contient plusieurs Produits
        Commande.belongsToMany(models.Produit, { through: models.Ligne_commande ,onDelete: "cascade" });
        //chaque Commande effectue par un Acheteur
        Commande.belongsTo(models.Acheteur);
    
      };

    return Commande;
};