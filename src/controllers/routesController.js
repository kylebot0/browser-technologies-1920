const fetch = require('node-fetch');
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
const ObjectId = require('mongodb').ObjectId;
const uri = process.env.MONGO_URI
const serveroptions = {
    'auto_reconnect': true,
    'poolSize': 5
};
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, auto_reconnect: true, poolSize: 5 });



async function getJoinId(req, res) {
    const id = req.params.id
    let stelling = ''
    try {
        console.log(client.s.state)
        await client.connect()
        const db = client.db('polls')
        const o_id = new ObjectId(id);
        const sample = await db.collection('games').findOne({ _id: o_id })
        console.log(sample._id)
        const uniqueId = sample._id
        req.session.gameId = uniqueId
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

    })
}

function getBegin(req, res) {
    res.render('./pages/begin', {

    })
}

async function getResult(req, res) {
    const id = req.params.id
    let result = {}
    try {
        await client.connect()
        const db = client.db('polls')
        req.session.gameId = id
        const o_id = new ObjectId(id);
        result = await db.collection('games').findOne({ _id: o_id })
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

    try {
        console.log(client)
        await client.connect()
        const db = client.db('polls')
        const stelling = req.body.stelling;
        const sample = await db.collection('games').insertOne({
            stelling: stelling,
            answers: { eens: 0, oneens: 0 }
        })
        const uniqueId = sample.insertedId
        req.session.gameId = uniqueId
        console.log(req.session.gameId)
    } catch (e) {
        console.error(e)
    } finally {
        const fullUrl = req.protocol + '://' + req.get('host') + '/join/' + req.session.gameId;
        res.render('./pages/createdGame', {
            gameUrl: fullUrl
        })
    }
}

async function postEens(req, res) {
    const id = req.session.gameId
    try {
        // await client.connect()
        const db = client.db('polls')
        const o_id = new ObjectId(id);
        const sample = await db.collection('games').findOne({ _id: o_id })
        const modified = await db.collection('games').updateOne({ _id: o_id }, { $set: { answers: { eens: (sample.answers.eens + 1), oneens: sample.answers.oneens } } }, function(err, res) {
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
    const id = req.session.gameId
    try {
        // await client.connect()
        const db = client.db('polls')
        const o_id = new ObjectId(id);
        const sample = await db.collection('games').findOne({ _id: o_id })
        const modified = await db.collection('games').updateOne({ _id: o_id }, { $set: { answers: { eens: sample.answers.eens, oneens: (sample.answers.oneens + 1) } } }, function(err, res) {
            console.log(err)
        })
    } catch (e) {
        console.error(e)
    } finally {
        const fullUrl = req.protocol + '://' + req.get('host') + '/join/' + req.session.gameId;
        res.redirect(`./result/${req.session.gameId}`)
    }
}

module.exports = {
    getOverview,
    getJoinId,
    getJoin,
    getBegin,
    getResult,
    postStelling,
    postEens,
    postOneens
}