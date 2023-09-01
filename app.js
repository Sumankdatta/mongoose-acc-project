const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");

//middleware
app.use(express.json());
app.use(cors());


//routes
const productRoutes = require('./routes/product.routes')


app.get("/", (req, res) => {
    res.send('Acc-practice server is running')
})

app.use('/api/v1/product', productRoutes)


module.exports = app;