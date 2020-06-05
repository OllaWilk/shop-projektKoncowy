const express = require('express');
const router = express.Router();
const CartController = require('../controllers/cart.controller.js');

// router.route('/cart/:id').get(CartController.postOne); //pokaż zanówienie
// router.route('/cart/:id').post(CartController.postOne); //edytuj zamówenie  post lub put. Przemyśleć!

module.exports = router;