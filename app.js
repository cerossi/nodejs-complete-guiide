const path = require('path');
const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', adminData.routes);
app.use(shopRouter);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page not found' });
})

app.listen(3000);