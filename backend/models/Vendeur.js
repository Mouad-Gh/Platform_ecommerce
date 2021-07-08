const Utilisateur= require('./Utilisateur');
module.exports= (sequelize,DataTypes)=>{
    const Vendeur= sequelize.define('Vendeur',{

    });
    //Vendeur.belongsTo(Utilisateur);
    Vendeur.associate= models =>{

        //Vendeur est un Acheteur
        Vendeur.belongsTo(models.Acheteur);
        //chaque Vendeur peut avoir plusieurs Boutiques
        Vendeur.hasMany(models.Boutique,{
        onDelete: "cascade"
        });
    };
    
    return Vendeur;
};