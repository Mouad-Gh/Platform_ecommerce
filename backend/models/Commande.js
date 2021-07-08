const Utilisateur= require('./Utilisateur');
module.exports= (sequelize,DataTypes)=>{
    const Commande= sequelize.define('Commande',{
        date: {
            type: DataTypes.DATE,
            allowNull: false
          }
    });
    //Commande.belongsTo(Utilisateur);

    Commande.associate= models =>{
      
        //chaque Commande contient plusieurs Produits
        Commande.belongsToMany(models.Produit, { through: 'ligne_commande' });
        //chaque Commande effectue par un Acheteur
        Commande.belongsTo(models.Acheteur);
    
      };

    return Commande;
};