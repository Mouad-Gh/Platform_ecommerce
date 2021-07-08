const db=require("../models");
//const Utilisateur=require("./models/Utilisateur");



//relations
// l'heritage 
db.Acheteur.belongsTo(db.Utilisateur);
db.Utilisateur.hasOne(db.Acheteur);
db.Admin.belongsTo(db.Utilisateur);
db.Utilisateur.hasOne(db.Acheteur);
db.Vendeur.belongsTo(db.Acheteur);
db.Acheteur.hasOne(db.Vendeur);
//chaque produit a plusieurs images
db.Produit.hasMany(db.Produit_image);
db.Produit_image.belongsTo(db.Produit);
//chaque Categorie a plusieurs Produits
db.Categorie.hasMany(db.Produit);
db.Produit.belongsTo(db.Categorie);
//chaque marque a plusieurs Produit
db.Marque.hasMany(db.Produit);
db.Produit.belongsTo(db.Marque);
//chaque Boutique contient plusieurs Produit
db.Boutique.hasMany(db.Produit);
db.Produit.belongsTo(db.Boutique);
//chaque Vendeur peut avoir plusieurs Boutiques
db.Vendeur.hasMany(db.Boutique);
db.Boutique.belongsTo(db.Vendeur);
//chaque Commande contient plusieurs Produits et chaque Produit peut être dans plusieurs Commandes
db.Commande.belongsToMany(db.Produit, { through: 'ligne_commande' });
db.Produit.belongsToMany(db.Commande, { through: 'ligne_commande' });
//chaque Acheteur peut adorer plusieurs Produits et chaque Produit peut être adorer par plusieurs Acheteurs
db.Acheteur.belongsToMany(db.Produit, { through: 'produit_souhaite' });
db.Produit.belongsToMany(db.Acheteur, { through: 'produit_souhaite' });
//chaque Achteur peut effectuer plusieurs Commandes 
db.Acheteur.hasMany(db.Commande);
db.Commande.belongsTo(db.Acheteur);

db.sequelize.sync({force: true}).then((result)=>{
    //  console.log(result);
}).then((result)=>{
     db.Utilisateur.create({Nom: "Ghouichat", Prenom: "Mouad", Email:"mouad@gmail.com", Mdp:"12345"});
    console.log(db.Utilisateur);
}).catch((err)=>{
    console.log(err);
});
