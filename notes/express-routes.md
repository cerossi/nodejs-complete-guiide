# Express routes

* express/app.js:
````javascript
const path = require('path');
const express = require('express');

const app = express();

/* Middlewares that will handle the request were separated into two different files */
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

/* express.urlenconded is a built-in middleware that parses the URL enconded params in the request body */
app.use(express.urlencoded({extended: true}));
/* express.static is another built-in middleware that serves static files, like css, in the given folder (in this case, public) */
app.use(express.static(path.join(__dirname,'public')));

/* Here the imported router are binded to the express app */
app.use('/admin', adminRouter);
app.use(shopRouter);

/* Serving a 404 page for all non-expected routes */
app.use((req, res, next) => {
    /* This serves a HTML file as a HTTP response */
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})

app.listen(3000);
````



* express/routes/admin.js:
````javascript
const path = require('path');
const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    /* This function serves the HTML page located in the views folder */
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    /* Here we can log the request body due to express.urlencoded that parsed it previously */
    console.log(req.body);
    res.redirect('/');
});

/* This allows us to import this router in the app.js */
module.exports = router;
````