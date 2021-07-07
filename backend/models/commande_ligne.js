const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('commande_ligne', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    quantite: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    commande_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'commande',
        key: 'id'
      }
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
    tableName: 'commande_ligne',
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
        name: "cl_commande_idx",
        using: "BTREE",
        fields: [
          { name: "commande_id" },
        ]
      },
      {
        name: "cl_produit_idx",
        using: "BTREE",
        fields: [
          { name: "produit_id" },
        ]
      },
    ]
  });
};
