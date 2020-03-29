const express = require('express');
const session = require('express-session')
require('dotenv').config()
const routing = require('./routes/routes')
const MongoClient = require('mongodb').MongoClient
const uri = process.env.MONGO_URI

const bodyParser = require('body-parser')

const PORT = process.env.PORT || 9090
const app = express();


app.set('view engine', 'ejs')
    .set('views', 'src/views')
    .use(express.static('src/public'))
    .use(session({
        resave: false,
        saveUninitialized: true,
        secret: process.env.SECRET
    }))
    .use(bodyParser.urlencoded({ extended: false }))
    .use(routing);

app.listen(PORT, function() {
    console.log(`Application started on port: ${PORT}`);
});