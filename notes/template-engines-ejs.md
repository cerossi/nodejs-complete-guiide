# Using EJS as Template Engines

* Rendering a simple EJS pages:

    ````javascript
    // app.js
    const express = require('express');

    const app = express();

    // Setup pug as the view engine
    app.set('view engine', 'pug');
    // By default, views is the folder where node will look for .ejs files. 
    // But if you want to add a customize the folder name where you'll store the views
    // this setting must be changed.
    app.set('views', 'views');

    // render('404') will look for views/404.ejs and render it as a HTML page
    app.use((req, res, next) => {
        res.status(404).render('404', { pageTitle: 'Page not found!' });
    })
    ````

    ````html
    <!-- views/404.ejs -->
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <!-- Syntax to print values passed through the middleware in EJS -->
            <title><%= pageTitle %></title>
            <link rel="stylesheet" href="/css/main.css">
        </head>
        </body>
            ...
        </body>
    </html>
    ````

* Rendering dynamic content:

    ````javascript
    const express = require('express');

    const app = express();

    // Setup pug as the view engine
    app.set('view engine', 'pug');
    // By default, views is the folder where node will look for HTML/pug pages. 
    // If you want to add a custom folder to store the views you'll have to change this.
    app.set('views', 'views');

    // render('404') will look for views/404.pug and render it as a HTML page
    app.use((req, res, next) => {
        products = [{title: "My first book"}, {title: "Another book"}]
        res.render('shop',{prods: products})
    })
    ````

    ````html
        <main>
        <!-- EJS accepts vanilla JS to render dynamic content -->
        <% if (prods.length > 0) { %>
            <div class="grid">
                <% for (let product of prods) { %>
                    <article class="card product-item">
                        <header class="card__header">
                            <h1 class="product__title"><%= product.title %></h1>
                        </header>
                        <div class="card__image">
                            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/" alt="A Book">
                        </div>
                        <div class="card__content">
                            <h2 class="product__price">$19.99</h2>
                            <p class="product__description">A very interesting book about so many even more interesting things!</p>
                        </div>
                        <div class="card__actions">
                            <button class="btn">Add to Cart</button>
                        </div>
                    </article>
                <% } %>
            </div>
        <% } else { %>
            <h1>No Products Found!</h1>
        <% } %>
    </main>
    ````

* Using partials as layouts (includes):
    ````html
    <!-- views/includes/head.ejs -->
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <!-- Syntax to print values passed through the middleware in EJS -->
            <title><%= pageTitle %></title>
            <link rel="stylesheet" href="/css/main.css">
        </head>
    ````
    ````html
    <!-- views/404.ejs -->
    <!-- This syntax allows us to reuse the HTML stored in the file includes/head.ejs  -->
    <%- include('includes/head.ejs') %>
        <body>
            <h1>Page Not Found!</h1>
        </body>
    </html>
    ````