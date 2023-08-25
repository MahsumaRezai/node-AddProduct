const express = require('express');
const bodyParser = require('body-parser');
const adminRoute = require('./routes/admin');
const shopeRoute = require('./routes/shop')
const app = express();
app.use(adminRoute);
app.use(shopeRoute)


app.use(bodyParser.urlencoded({ extended: false }));






app.listen(4000);
