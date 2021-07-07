const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produit_souhaite', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'client',
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
    tableName: 'produit_souhaite',
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
        name: "ph_produit_idx",
        using: "BTREE",
        fields: [
          { name: "produit_id" },
        ]
      },
      {
        name: "ph_client_idx",
        using: "BTREE",
        fields: [
          { name: "client_id" },
        ]
      },
    ]
  });
};
