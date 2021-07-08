const Categorie= require('./Categorie');
module.exports= (sequelize,DataTypes)=>{
    const Produit= sequelize.define('Produit',{
         nom: {
            type: DataTypes.STRING(45),
            allowNull: false
          },
          description: {
            type: DataTypes.STRING(45),
            allowNull: false
          },
          PU: {
            type: DataTypes.DOUBLE,
            allowNull: false
          },
          quantite_dispo: {
            type: DataTypes.INTEGER,
            allowNull: false
          }
    });
    //Produit.belongsTo(Categorie);

    Produit.associate= models =>{

      //chaque produit a plusieurs images
      Produit.hasMany(models.Produit_image,{
        onDelete: "cascade"
      });
      //chaque Produit appartient à une Categorie
      Produit.belongsTo(models.Categorie);
      //chaque Produit appartient à une Marque
      Produit.belongsTo(models.Marque);
      //chaque Produit appartient à une Boutique
      Produit.belongsTo(models.Boutique);
      //chaque Produit peut être dans plusieurs Commandes
      Produit.belongsToMany(models.Commande, { through: 'ligne_commande' });
      //chaque Produit peut être adorer par plusieurs Acheteurs
      Produit.belongsToMany(models.Acheteur, { through: 'produit_souhaite' });
      
    };

    return Produit;
};