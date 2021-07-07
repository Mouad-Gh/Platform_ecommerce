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
    return Produit;
};