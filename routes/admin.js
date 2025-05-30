const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();
const products = [];

router.get('/add-product', adminController.getAddProduct);
router.post('/add-product', adminController.postAddProduct);
router.get('/products', adminController.getProducts);

module.exports = router;