# Basic Express Setup

```javascript
const express = require("express");

const app = express();

/* 
    Express handles HTTP request using functions like this one, usually called Middlewares.
    It takes two arguments, the URL or path and the function to handle this request. 
    Here, the path doesn't need to match exactly. If it starts with "/users", this middleware will run.
    Middlewares are always executed from top to down, so the order always matters.
*/
app.use('/users', function (req, res) {
    console.log('Users page middleware');
    /* this sends a response for the incoming request in the /users path*/
    res.send('<h1>Users page</h1>');
});

app.use('/', function (req, res) {
    console.log('Home page middleware');
    res.send('<h1>Home page</h1>');
});

/* This starts the web app server listening to the port 3000 */
app.listen(3000);
```