const path = require('path');
const fs = require('fs');

const rootDir = path.dirname(process.mainModule.filename);
const productDataFile = path.join (
    rootDir,
    'data',
    'products.json'
);

const getProductsFromFile = (cb) => {
    fs.readFile(productDataFile, (err, fileContent) => {
        if (err) {
            cb([]);
        }
        cb(JSON.parse(fileContent));
    });
}

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(productDataFile, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}