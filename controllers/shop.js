const Products = require('../models/product');

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

exports.getIndex = (req, res, next) => {
    res.render('shop/index',{
        pageTitle: 'IT Shop', 
        path: '/'
    });
};

exports.getOrders = (req, res, next) => {
    res.render('shop/orders',{
        pageTitle: 'Your Orders', 
        path: '/orders'
    });
};

exports.getProducts = (req, res, next) => {
    Products.fetchAll(products => {
        res.render('shop/product-list',{
            prods: products, 
            pageTitle: 'IT Shop', 
            path: '/products'
        });
    });
};