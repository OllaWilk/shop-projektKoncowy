const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/products.controller');

// router.route('/products').get(ProductController.getAll); //pobierz wszystkie produkt
// router.route('/products/:id').get(ProductController.getOne); //podaj konkretny produkt

module.exports = router;