const Commande = require("./Commande");
const Produit = require('./Produit');


module.exports= (sequelize,DataTypes)=>{
    const Ligne_commande= sequelize.define('Ligne_commande',{
        quantite: {
            type: DataTypes.FLOAT,
            allowNull: false
          }
    },{ timestamps: false,freezeTableName: true });

    // Produit.belongsToMany(Commande, { through: Ligne_commande,onDelete: "cascade" });
    // Commande.belongsToMany(models.Produit, { through: models.Ligne_commande ,onDelete: "cascade" });

    return Ligne_commande;
};