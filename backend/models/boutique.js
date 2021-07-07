const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('boutique', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom_boutique: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    vendeur_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'vendeur',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'boutique',
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
        name: "boutique_vendeur_idx",
        using: "BTREE",
        fields: [
          { name: "vendeur_id" },
        ]
      },
    ]
  });
};
