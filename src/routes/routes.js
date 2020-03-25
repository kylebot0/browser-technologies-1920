const express = require('express');
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const router = express.Router();
const get = {
    getOverview,
    getJoinId,
    getJoin,
    getBegin,
    getResult
} = require('../controllers/routesController')

const post = {
    postStelling,
    postresult,
    postEens,
    postOneens,
    postJoin
} = require('../controllers/routesController')

router.get('/', get.getOverview)
    .get('/begin', get.getBegin)
    .get('/join', get.getJoin)
    .get('/join/:id', get.getJoinId)
    .get('/result/:id', get.getResult)
    .post('/creategame', urlencodedParser, post.postStelling)
    .post('/joingame', urlencodedParser, post.postJoin)
    .post('/eens', urlencodedParser, post.postEens)
    .post('/oneens', urlencodedParser, post.postOneens);


// Make sure to export the router so it becomes available on imports
module.exports = router;