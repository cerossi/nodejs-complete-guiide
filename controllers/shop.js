const Product = require('../models/product');

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
        });
    });
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list',{
            prods: products, 
            pageTitle: 'IT Shop', 
            path: '/products'
        });
    });
};

exports.getOrders = (req, res, next) => {
    res.render('shop/orders',{
        pageTitle: 'Your Orders', 
        path: '/orders'
    });
};


exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Your Cart',
        path: '/cart',
    });
};

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        pageTitle: 'Checkout',
        path: '/checkout',
    });
};