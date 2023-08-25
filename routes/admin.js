const express = require('express');
const route = express.Router();

route.get('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

route.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});





module.exports = route;
