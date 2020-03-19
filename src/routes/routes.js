const express = require('express');
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const router = express.Router();
const get = {
    getOverview,
getJoinId,
getJoin,
getBegin
} = require('../controllers/routesController')

const post = {
    postStelling
} = require('../controllers/routesController')

router.get('/', get.getOverview)
.get('/begin', get.getBegin)
.get('/join', get.getJoin)
.get('/join/:id', get.getJoinId)
.post('/creategame', urlencodedParser, post.postStelling);


// Make sure to export the router so it becomes available on imports
module.exports = router;