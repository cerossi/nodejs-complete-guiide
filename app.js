const path = require('path');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const errorController = require('./controllers/errors');


app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', adminRouter);
app.use(shopRouter);

app.use(errorController.get404);

app.listen(3000);