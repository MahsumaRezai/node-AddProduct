const express = require('express');
const app = express();
app.use((req, res, next) => {
    console.log('this is the frist middle');
    next()
})
app.use((req, res, next) => {
    console.log("Hello my name is second middle");
    res.send('<h1> Hello Mahsumeh to express js class</h1>')
})







app.listen(4000)


