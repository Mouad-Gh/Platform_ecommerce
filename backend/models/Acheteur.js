const db= require('../models');
module.exports= (sequelize,DataTypes)=>{
    const Acheteur= sequelize.define('Acheteur',{

    },{
        classMethods: {
            associate: function(models) {
                this.belongsTo(models.Utilisateur);
                
            }
        }
    });
    Acheteur.associate= models =>{
        
        //Acheteur est un Utilisateur
        Acheteur.belongsTo(models.Utilisateur);
        //Acheteur peut être un Vendeur aussi
        Acheteur.hasOne(models.Vendeur,{
            onDelete: "cascade"
        });

        //chaque Acheteur peut adorer plusieurs Produits
        Acheteur.belongsToMany(models.Produit, { through: 'produit_souhaite' });
        //chaque Achteur peut effectuer plusieurs Commandes
        models.Acheteur.hasMany(models.Commande,{
            onDelete: "cascade"
        });
        
    };
    
    return Acheteur;
};