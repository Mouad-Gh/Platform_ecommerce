const express = require("express");
const router = express.Router();
const utilisateur=require("../controllers/utilisateur");


router.post("/utilisateur/ajouter",utilisateur.addUtilisateur);
router.get("/utilisateur/tous",utilisateur.getUtilisateurs);
router.get("/utilisateur/:id",utilisateur.getUtilisateur);
router.put("/utilisateur/:id",utilisateur.updateUtilisateur);
router.delete("/utilisateur/:id",utilisateur.deleteUtilisateur);

module.exports = router;