const fetch = require('node-fetch');
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
const ObjectId = require('mongodb').ObjectId;
const uri = process.env.MONGO_URI
const serveroptions = {
    'auto_reconnect': true,
    'poolSize': 5
};
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const { check, validationResult } = require('express-validator');


function generateRandomNumber() {
    return Math.floor(Math.random() * (99999 - 1) + 1)
}

async function getJoinId(req, res) {
    let hash = parseInt(req.params.id)
    console.log(hash)
    let stelling = ''
    try {
        await client.connect()
        const db = client.db('polls')
        const sample = await db.collection('games').findOne({game: hash})
        console.log('result ' +sample)
        req.session.gameId = hash
        stelling = sample.stelling
    } catch (e) {
        console.error(e)
    } finally {
        res.render('./pages/poll', {
            stelling: stelling
        })
    }
}

function getOverview(req, res) {
    res.render('./pages/overview', {

    })
}

function getJoin(req, res) {
    res.render('./pages/join', {
        error: ''
    })
}

function getBegin(req, res) {
    res.render('./pages/begin', {
        error: ''
    })
}

async function getResult(req, res) {
    
    const id = parseInt(req.params.id)
    let result = {}
    try {
        await client.connect()
        const db = client.db('polls')
        req.session.gameId = id
        result = await db.collection('games').findOne({ game: id })
        console.log(result)
    } catch (e) {
        console.error(e)
    } finally {
        res.render('./pages/result', {
            eens: result.answers.eens,
            oneens: result.answers.oneens,
            stelling: result.stelling
        })
    }
}

async function postStelling(req, res) {
    const errors  = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).render('./pages/begin', {
            error: 'Veld moet een stelling bevatten'
        })
      }
    
    try {
        console.log(client)
        await client.connect()
        const db = client.db('polls')
        const stelling = req.body.stelling;
        const gameId = parseInt(generateRandomNumber())
        const sample = await db.collection('games').insertOne({
            game: gameId,
            stelling: stelling,
            answers: { eens: 0, oneens: 0 }
        })
        req.session.gameId = gameId
    } catch (e) {
        console.error(e)
    } finally {
        const fullUrl = req.protocol + '://' + req.get('host') + '/join/' + req.session.gameId;
        res.render('./pages/createdGame', {
            gameUrl: fullUrl,
            poll: req.session.gameId
        })
    }
}

async function postEens(req, res) {
    const id = parseInt(req.session.gameId)
    try {
        // await client.connect()
        const db = client.db('polls')
        const sample = await db.collection('games').findOne({ game: id })
        const modified = await db.collection('games').updateOne({ game: id }, { $set: { answers: { eens: (sample.answers.eens + 1), oneens: sample.answers.oneens } } }, function(err, res) {
            console.log(err)
        })
    } catch (e) {
        console.error(e)
    } finally {
        const fullUrl = req.protocol + '://' + req.get('host') + '/join/' + req.session.gameId;
        res.redirect(`./result/${req.session.gameId}`)
    }
}

async function postOneens(req, res) {
    const id = parseInt(req.session.gameId)
    try {
        // await client.connect()
        const db = client.db('polls')
        const sample = await db.collection('games').findOne({ game: id })
        const modified = await db.collection('games').updateOne({ game: id }, { $set: { answers: { eens: sample.answers.eens, oneens: (sample.answers.oneens + 1) } } }, function(err, res) {
            console.log(err)
        })
    } catch (e) {
        console.error(e)
    } finally {
        const fullUrl = req.protocol + '://' + req.get('host') + '/join/' + req.session.gameId;
        res.redirect(`./result/${req.session.gameId}`)
    }
}
function postJoin(req, res) {
    const errors  = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).render('./pages/join', {
            error: 'Veld moet een poll code bevatten'
        })
      }
    const id = req.body.gameId
    res.redirect(`./join/${id}`)
}
module.exports = {
    getOverview,
    getJoinId,
    getJoin,
    getBegin,
    getResult,
    postStelling,
    postEens,
    postOneens,
    postJoin
}