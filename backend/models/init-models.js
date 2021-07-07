var DataTypes = require("sequelize").DataTypes;
var _admin = require("./admin");
var _boutique = require("./boutique");
var _categorie = require("./categorie");
var _client = require("./client");
var _commande = require("./commande");
var _commande_ligne = require("./commande_ligne");
var _marque = require("./marque");
var _produit = require("./produit");
var _produit_photos = require("./produit_photos");
var _produit_souhaite = require("./produit_souhaite");
var _utilisateur = require("./utilisateur");
var _vendeur = require("./vendeur");

function initModels(sequelize) {
  var admin = _admin(sequelize, DataTypes);
  var boutique = _boutique(sequelize, DataTypes);
  var categorie = _categorie(sequelize, DataTypes);
  var client = _client(sequelize, DataTypes);
  var commande = _commande(sequelize, DataTypes);
  var commande_ligne = _commande_ligne(sequelize, DataTypes);
  var marque = _marque(sequelize, DataTypes);
  var produit = _produit(sequelize, DataTypes);
  var produit_photos = _produit_photos(sequelize, DataTypes);
  var produit_souhaite = _produit_souhaite(sequelize, DataTypes);
  var utilisateur = _utilisateur(sequelize, DataTypes);
  var vendeur = _vendeur(sequelize, DataTypes);

  produit.belongsTo(boutique, { as: "boutique", foreignKey: "boutique_id"});
  boutique.hasMany(produit, { as: "produits", foreignKey: "boutique_id"});
  produit.belongsTo(categorie, { as: "categorie", foreignKey: "cat_id"});
  categorie.hasMany(produit, { as: "produits", foreignKey: "cat_id"});
  commande.belongsTo(client, { as: "client", foreignKey: "client_id"});
  client.hasMany(commande, { as: "commandes", foreignKey: "client_id"});
  produit_souhaite.belongsTo(client, { as: "client", foreignKey: "client_id"});
  client.hasMany(produit_souhaite, { as: "produit_souhaites", foreignKey: "client_id"});
  vendeur.belongsTo(client, { as: "utilisateur", foreignKey: "utilisateur_id"});
  client.hasOne(vendeur, { as: "vendeur", foreignKey: "utilisateur_id"});
  commande_ligne.belongsTo(commande, { as: "commande", foreignKey: "commande_id"});
  commande.hasMany(commande_ligne, { as: "commande_lignes", foreignKey: "commande_id"});
  produit.belongsTo(marque, { as: "marque", foreignKey: "mar_id"});
  marque.hasMany(produit, { as: "produits", foreignKey: "mar_id"});
  commande_ligne.belongsTo(produit, { as: "produit", foreignKey: "produit_id"});
  produit.hasMany(commande_ligne, { as: "commande_lignes", foreignKey: "produit_id"});
  produit_photos.belongsTo(produit, { as: "produit", foreignKey: "produit_id"});
  produit.hasMany(produit_photos, { as: "produit_photos", foreignKey: "produit_id"});
  produit_souhaite.belongsTo(produit, { as: "produit", foreignKey: "produit_id"});
  produit.hasMany(produit_souhaite, { as: "produit_souhaites", foreignKey: "produit_id"});
  admin.belongsTo(utilisateur, { as: "utilisateur", foreignKey: "utilisateur_id"});
  utilisateur.hasOne(admin, { as: "admin", foreignKey: "utilisateur_id"});
  client.belongsTo(utilisateur, { as: "utilisateur", foreignKey: "utilisateur_id"});
  utilisateur.hasOne(client, { as: "client", foreignKey: "utilisateur_id"});
  boutique.belongsTo(vendeur, { as: "vendeur", foreignKey: "vendeur_id"});
  vendeur.hasMany(boutique, { as: "boutiques", foreignKey: "vendeur_id"});

  return {
    admin,
    boutique,
    categorie,
    client,
    commande,
    commande_ligne,
    marque,
    produit,
    produit_photos,
    produit_souhaite,
    utilisateur,
    vendeur,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
