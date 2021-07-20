const express = require("express");
const router = express.Router();
const utilisateur=require("../controllers/utilisateur");
const marque=require("../controllers/marque");
const categorie=require("../controllers/categorie");
const produit=require("../controllers/produit");
const produit_image=require("../controllers/produit_image");
const vendeur=require("../controllers/vendeur");
const acheteur=require("../controllers/achteur");
const admin=require("../controllers/admin");
const boutique=require("../controllers/boutique");
const commande=require("../controllers/commande");
const produit_specification=require('../controllers/produit_specification');
const produits_souhaite=require("../controllers/produit_souhaite");


const multer=require("multer");
const path=require("path");
const DIR = './public/';

const storage=multer.diskStorage({
    //where on our system we wanna store this
    destination: (req,file,cb)=>{
        cb(null,DIR);
    },
    //the name of the file we wanna store
    filename: (req,file,cb)=>{
        cb(null,Date.now() + path.extname(file.originalname) );
    }
    
})

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('File type not accepted (.png, .jpg, .jpeg)'));
        }
    }
});

router.post("/upload",upload.array("imagesArray",8),produit_image.uploadImages);


//Utilisateur
router.post("/utilisateur/ajouter",utilisateur.addUtilisateur);
router.get("/utilisateur/tous",utilisateur.getUtilisateurs);
router.get("/utilisateur/tous/:page(\\d+)/:page_size(\\d+)",utilisateur.getUtilisateursByPage);
router.get("/utilisateur/:id",utilisateur.getUtilisateur);
router.put("/utilisateur/:id",utilisateur.updateUtilisateur);
router.delete("/utilisateur/:id",utilisateur.deleteUtilisateur);
router.get("/utilisateur/find/:page(\\d+)/:page_size(\\d+)",utilisateur.findUtilisateur);
//modifier le mdp
router.put('/utilisateur/changerMDP/:id',utilisateur.updateMotDePasse);
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
router.get("/categorie/:nom/meilleurProduits",categorie.getCategorieMeilleursProduits);
router.get("/categorie/:id",categorie.getCategorie);
router.post("/categorie/ajouter",categorie.addCategorie);
router.put("/categorie/:id",categorie.UpdateCategorie);
router.delete("/categorie/:id",categorie.deleteCategorie);
router.get("/categorie/:nom/produits/:page(\\d+)/:page_size(\\d+)",categorie.getCategorieProduits);

//Produit
router.post("/produit/ajouter",upload.array("imagesArray",8),produit.addProduit);
router.get("/produit/tous",produit.getProduits);
router.get("/produit/:id",produit.getProduit);

  //pour les produits d'une categorie 
router.get("/produit/categorie/:id",produit.getProduitsCategorie);
router.put("/produit/:id",produit.updateProduit);
router.delete("/produit/:id",produit.deleteProduit);
//pour le pagination
router.get("/produits/:page(\\d+)/:page_size(\\d+)",produit.getProduitsparPage);
//pour le filtrage
router.get("/produit/filter/:page(\\d+)/:page_size(\\d+)",produit.produitsFilter);

//Produit_images
router.post("/produit_image/ajouter",produit_image.addProduit_image);
router.delete("/produit_image/:id",produit_image.deleteProduit_image);
router.get("/produit_image/tous",produit_image.getProduit_images);


//Produit_specification
router.post("/produit_specification/ajouter",produit_specification.addProduit_specification);
router.get("/produit_specification/tous",produit_specification.getProduit_specifications);
router.get("/produit_specification/:id",produit_specification.getProduit_specification);
router.put("/produit_specification/:id",produit_specification.updateProduit_specification);
router.delete("/produit_specification/:id",produit_specification.deleteProduit_specification);

//Vendeur
router.post("/vendeur/ajouter",vendeur.addVendeur);
router.get("/vendeur/tous",vendeur.getVendeurs);
router.get("/vendeur/tous/:page(\\d+)/:page_size(\\d+)",vendeur.getVendeursByPage);
router.get("/vendeur/:id",vendeur.getVendeur);
router.put("/vendeur/:id",vendeur.updateVendeur);
router.delete("/vendeur/:id",vendeur.deleteVendeur);
router.get("/vendeur/find/:page(\\d+)/:page_size(\\d+)",vendeur.findVendeur);


//Achteurs
router.get("/acheteur/tous",acheteur.getAcheteurs);
router.get("/acheteur/tous/:page(\\d+)/:page_size(\\d+)",acheteur.getAcheteursByPage);
router.get("/acheteur/find/:page(\\d+)/:page_size(\\d+)",acheteur.findAcheteurs);
router.get("/acheteur/:id",acheteur.getAcheteur);
router.post("/acheteur/ajouter",acheteur.addAchteur);
router.put("/acheteur/:id",acheteur.UpdateAchteur);
router.delete("/acheteur/:id",acheteur.deleteAchteur);
//obtenir les commandes des utilisateurs
router.get('/achteur/:id/commandes',acheteur.getAchteurCommandes);

//Admins
router.get("/admin/tous",admin.getAdmins);
router.get("/admin/tous/:page(\\d+)/:page_size(\\d+)",admin.getAdminsByPage);
router.get("/admin/find/:page(\\d+)/:page_size(\\d+)",admin.findAdmin);
router.get("/admin/:id",admin.getAdmin);
router.post("/admin/ajouter",admin.addAdmin);
router.put("/admin/:id",admin.UpdateAdmin);
router.delete("/admin/:id",admin.deleteAdmin);

//Boutique
router.get("/boutique/tous",boutique.getBoutiques);
router.get("/boutique/tous/:page(\\d+)/:page_size(\\d+)",boutique.getBoutiquesByPage);
router.get("/boutique/:id",boutique.getBoutique);
router.post("/boutique/ajouter",boutique.addBoutique);
router.put("/boutique/:id",boutique.UpdateBoutique);
router.delete("/boutique/:id",boutique.deleteBoutique);

//Commande
router.get("/commande/tous",commande.getCommandes);
router.get("/commande/tous/:page(\\d+)/:page_size(\\d+)",commande.getCommandesByPage);
router.get("/commande/:id",commande.getCommande);
router.post("/commande/ajouter",commande.addCommande);
router.put("/commande/:id",commande.UpdateCommande);
router.delete("/commande/:id",commande.deleteCommande);

//Produits_Souhaites
//id de utilisateur
router.get("/produits_souhaite/:id",produits_souhaite.getProduits_Souhaites);
//id de produit_souhaite
router.delete("/produits_souhaite/:id",produits_souhaite.supprimerProduits_Souhaites);
router.post("/produits_souhaite/ajouter",produits_souhaite.ajouterProduits_Souhaites);


module.exports = router;