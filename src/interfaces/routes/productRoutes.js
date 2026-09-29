const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

// Ruta GET para obtener todos los productos
// URL final: /api/products
router.get('/', ProductController.getProducts);

module.exports = router;