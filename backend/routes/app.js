const express = require("express");
const router = express.Router();
const utilisateur=require("../controllers/utilisateur");
const marque=require("../controllers/marque");
const categorie=require("../controllers/categorie");
const produit=require("../controllers/produit");
const produit_image=require("../controllers/produit_image");
const vendeur=require("../controllers/vendeur");

//Utilisateur
router.post("/utilisateur/ajouter",utilisateur.addUtilisateur);
router.get("/utilisateur/tous",utilisateur.getUtilisateurs);
router.get("/utilisateur/:id",utilisateur.getUtilisateur);
router.put("/utilisateur/:id",utilisateur.updateUtilisateur);
router.delete("/utilisateur/:id",utilisateur.deleteUtilisateur);
//Marque
router.post("/marque/ajouter",marque.addMarque);
router.get("/marque/tous",marque.getMarques);
router.get("/marque/:id",marque.getMarque);
router.put("/marque/:id",marque.updateMarque);
router.delete("/marque/:id",marque.deleteMarque);
//
//Categorie
router.get("/categorie/tous",categorie.getCategories);
router.get("/categorie/tous/:page(\\d+)/:page_size(\\d+)",categorie.getCategoriesByPage);
router.get("/categorie/:id",categorie.getCategorie);
router.post("/categorie/ajouter",categorie.addCategorie);
router.put("/categorie/:id",categorie.UpdateCategorie);
router.delete("/categorie/:id",categorie.deleteCategorie);

//Produit
router.post("/produit/ajouter",produit.addProduit);
router.get("/produit/tous",produit.getProduits);
router.get("/produit/:id",produit.getProduit);
router.put("/produit/:id",produit.updateProduit);
router.delete("/produit/:id",produit.deleteProduit);
//Vendeur
router.post("/vendeur/ajouter",vendeur.addVendeur);
router.get("/vendeur/tous",vendeur.getVendeurs);
router.get("/vendeur/:id",vendeur.getVendeur);
router.put("/vendeur/:id",vendeur.updateVendeur);
router.delete("/vendeur/:id",vendeur.deleteVendeur);



module.exports = router;