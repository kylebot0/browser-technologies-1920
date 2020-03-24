const express = require('express');
const session = require('express-session')
require('dotenv').config()
const routing = require('./routes/routes')
const MongoClient = require('mongodb').MongoClient
const uri = process.env.MONGO_URI
const socket_io = require('socket.io');
const io = socket_io();

const bodyParser = require('body-parser')

const config = {
    port: 8080
}
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

app.listen(config.port, function() {
    console.log(`Application started on port: ${config.port}`);
});