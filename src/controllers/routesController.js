const fetch = require('node-fetch');
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
const uri = process.env.MONGO_URI
const requestOptions = {
    method: "GET",
    redirect: "follow"
};


async function getGame(id) { 
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect()
        console.log(process.env.MONGO_URI)
        const db = client.db('polls')
        const gameId = id;
        const sample = await db.collection('games').findOne({gameId: gameId})
        console.log(sample)
    } catch(e) { 
        console.error(e)
    } finally {
        await client.close()
    }
}

function getJoinId(req, res) {
   const id = req.params.id
   getGame(id)
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

function postStelling(req, res){
req.body
}

module.exports = {
    getOverview,
    getJoinId,
    getJoin,
    getBegin,
    postStelling
}