const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const colors = require("colors");
const app = require('./app');
const port = process.env.PORT || 4040;


//database connection
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
    console.log(`Database is connect successfully `.brightYellow.bold)
})


app.listen(port, () => {
    console.log(`Acc-practice server is running on ${port}`.yellow.bold)
})

















// const mongoose = require("mongoose");
// const dotenv = require("dotenv").config();
// const colors = require("colors");
// const port = process.env.PORT || 8080;

// const app = require('./app');

// //database collection
// mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
//     console.log(`Database connection is successful`.brightYellow.bold);
// })

// app.listen(port, () => {
//     console.log(`Mongoose server is running on ${port}`.yellow.bold)
// })