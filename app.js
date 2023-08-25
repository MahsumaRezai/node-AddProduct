const express = require('express');
const app = express();
app.use((req, res, next) => {
    console.log('this is awalyyes ');
    next()

})
app.use('/add', (req, res, next) => {
    console.log('this is the frist middle');
    res.send('<form action="/product" method="POST"><input title="name" type="text"><button>Add</button></form>');


})
app.use('product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/');
})
app.use('/second', (req, res, next) => {
    console.log("Hello my name is second middle");
    res.send('<h1> Hello Mahsumeh to express js class</h1>')
})







app.listen(4000)


