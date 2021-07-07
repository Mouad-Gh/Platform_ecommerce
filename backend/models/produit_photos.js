const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produit_photos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    chemin_fichier: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    estPrincipale: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    produit_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'produit',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'produit_photos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "pp_produit_idx",
        using: "BTREE",
        fields: [
          { name: "produit_id" },
        ]
      },
    ]
  });
};
