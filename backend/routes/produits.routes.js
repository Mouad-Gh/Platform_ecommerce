const router = require('express').Router();
const controller = require('../controllers/produits.controller');



router.get('/All',controller.allProduits);

router.get('/:id',controller.produitsParId);

router.get('/page/:page',controller.produitsParPage);





module.exports = router;