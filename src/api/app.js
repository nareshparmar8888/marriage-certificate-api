const dotenv = require('dotenv');
dotenv.config({ path: __dirname + '/./../../.env' });

// packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

var app = express();

// for parsing application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// console.log('string : ', process.env.DB_CONNECTION_STRING);
const DB_STRING = process.env.DB_CONNECTION_STRING;
const PORT = process.env.PORT;

// database connection
mongoose.connect(DB_STRING);
mongoose.connection.on("open", function() {
    console.log("Database connected successfully...");

    app.listen(process.env.PORT, function() {
        console.log("Server running on port number : " + PORT);
    });
});
mongoose.connection.on("error", function(err) {
    console.log("Databse connection failed : " + err);
})

// seeders
const createAdminUser = require('../seeders/createAdminUserSeeder.js');
createAdminUser(app);


// routes
require('../routes/api.js')(app);

app.all('*', function (req, res, next) {
    const err = new Error('Please enter valid url.');
    next(err);
});

// Global error middleware
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send({
        message: err.message,
        statusCode: res.statusCode,
        success: false,
        code: 'Internal Server Error',
        data: null
  });
});
