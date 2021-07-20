const Utilisateur= require('./Utilisateur');
module.exports= (sequelize,DataTypes)=>{
    const Categorie= sequelize.define('Categorie',{
        nom_categorie: {
            type: DataTypes.STRING(45),
            allowNull: false,
            unique: true
          }
    });
    //Categorie.belongsTo(Utilisateur);

    Categorie.associate= models =>{
      
        //chaque Categorie a plusieurs Produits
        Categorie.hasMany(models.Produit,{
            onDelete: "cascade"
        });
    
    };
    
    return Categorie;
};