# Using Pug as Template Engines

* Simple HTML using pug:

    ````pug
    <!DOCTYPE html>
    // Pugs simplifies the HTML removing the '<>' and closing tags. 
    // All attributes must go through parentheses, excepet classes and IDs that have a specifi syntax
    html(lang="en")

        head
            meta(charset="UTF-8")
            meta(name="viewport" content="width=device-width, initial-scale=1.0")
            meta(http-equiv="X-UA-Compatible" content="ie=edge")
            title Yikes! Page not found
            link(rel="stylesheet" href="/css/main.css")


        body
            // Classes are defined after a simple '.' and if you have more than one class, you can chain them using dot
            header.main-header.another-class
                nav.main-header__nav
                    ul.main-header__item-list
                        li.main-header__item
                            // IDs are defineds after a #
                            a.active(href="/")#ShopMenu Shop
                        li.main-header__item
                            a(href="/admin/add-product") Add Product

            main
                h1 Yikes!... Page not found
                img(src="https://media1.tenor.com/m/LX1reyWcd8EAAAAC/oopsies-ohno.gif")
    ````

* Rendering pug pages:

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
        res.status(404).render('404');
    })
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

    ````pug
    main
        if prods.length > 0 
            div.grid
                each product in prods
                    article.card.product-item
                        header.card__header
                            h1.product__title #{product.title}
                        div.card__image
                            img(src="https://cdn.pixabay.com/photo/2016/03/31/20/51/book-1296045_960_720.png" alt="A Book")
                        div.card__content
                            h2.product__price $19.99
                            p.product__description A very interesting book about so many even more interesting things!
                        div.card__actions
                            button.btn Add to Cart
        else
            h1 Sorry! No products availables!
    ````

* Using layouts:
    ````pug
    // views/layoust/main-layout.pug
    <!DOCTYPE html>
    html(lang="en")

        head
            meta(charset="UTF-8")
            meta(name="viewport" content="width=device-width, initial-scale=1.0")
            meta(http-equiv="X-UA-Compatible" content="ie=edge")
            title #{pageTitle}
            link(rel="stylesheet" href="/css/main.css")
            // block is a placeholder that can be implement by the page that will extend this layout
            block styles


        body
            header.main-header
                nav.main-header__nav
                    ul.main-header__item-list
                        li.main-header__item
                            a.active(href="/") Shop
                        li.main-header__item
                            a(href="/admin/add-product") Add Product

            block content

    // views/layoust/main-layout.pug
    extends layouts/main-layout.pug

    block styles
        link(rel="stylesheet" href="/css/forms.css")
        link(rel="stylesheet" href="/css/product.css")

    block content
        main
            form.product-form(action="/admin/add-product" method="POST")
                div.form-control
                    label(for="title") Title
                    input(type="text" name="title")#title
                    button.btn(type="submit") Add Product
    ````