const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produit', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    nom: {
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
    },
    cat_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categorie',
        key: 'id'
      }
    },
    mar_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'marque',
        key: 'id'
      }
    },
    boutique_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'boutique',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'produit',
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
        name: "produit_marque_idx",
        using: "BTREE",
        fields: [
          { name: "mar_id" },
        ]
      },
      {
        name: "produit_categorie_idx",
        using: "BTREE",
        fields: [
          { name: "cat_id" },
        ]
      },
      {
        name: "produit_boutique_idx",
        using: "BTREE",
        fields: [
          { name: "boutique_id" },
        ]
      },
    ]
  });
};
