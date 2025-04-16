const Products = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', { 
        pageTitle: '(Admin) Add Product', 
        path: '/admin/add-product'
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Products(req.body.title);
    product.save()
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    res.render('admin/products', {
        pageTitle: '(Admin) Products',
        path: '/admin/products',
    });
};