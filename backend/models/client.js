const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('client', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    utilisateur_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'utilisateur',
        key: 'id'
      },
      unique: "client_admin"
    }
  }, {
    sequelize,
    tableName: 'client',
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
        name: "user_id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "utilisateur_id" },
        ]
      },
    ]
  });
};
