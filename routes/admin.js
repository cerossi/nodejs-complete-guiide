const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();
const products = [];

router.get('/add-product', productsController.getAddProduct);
router.post('/add-product', productsController.postAddProduct);
router.get('/products', productsController.getProducts);

module.exports = router;