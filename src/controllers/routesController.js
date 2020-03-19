const fetch = require('node-fetch');
const requestOptions = {
    method: "GET",
    redirect: "follow"
};


function getLaunches(req, res) {
    fetch(`https://api.spacexdata.com/v3/launches`)
        .then(res => res.json())
        .then(body => {
            res.render('./pages/overview', {
                title: 'Launches',
                launches: body
            });
        })
}

function getSingleLaunch(req, res) {
    fetch(`https://api.spacexdata.com/v3/launches/${req.params.id}`)
        .then(res => res.json())
        .then(body => {
            res.render('./pages/singles/launch', {
                title: "",
                launch: body
            });
        })
}

function getShips(req, res) {
    fetch(`https://api.spacexdata.com/v3/ships`)
        .then(res => res.json())
        .then(body => {
            res.render('./pages/ships', {
                title: 'Ships',
                launches: body
            });
        })
}

function getSingleShip(req, res) {
    fetch(`https://api.spacexdata.com/v3/ships/${req.params.id}`)
        .then(res => res.json())
        .then(body => {
            res.render('./pages/singles/launch', {
                title: "",
                launch: body
            });
        })
}

function getCapsules(req, res) {
    fetch(`https://api.spacexdata.com/v3/capsules`)
        .then(res => res.json())
        .then(body => {
            res.render('./pages/capsules', {
                title: 'Capsules',
                launches: body
            });
        })
}

function getSingleCapsule(req, res) {
    fetch(`https://api.spacexdata.com/v3/capsules/${req.params.id}`)
        .then(res => res.json())
        .then(body => {
            res.render('./pages/singles/launch', {
                title: "",
                launch: body
            });
        })
}

function getRockets(req, res) {
    fetch(`https://api.spacexdata.com/v3/rockets`)
        .then(res => res.json())
        .then(body => {
            res.render('./pages/rocket', {
                title: 'Rockets',
                launches: body
            });
        })
}

function getSingleRocket(req, res) {
    fetch(`https://api.spacexdata.com/v3/rockets/${req.params.id}`)
        .then(res => res.json())
        .then(body => {
            res.render('./pages/singles/launch', {
                title: "",
                launch: body
            });
        })
}

function getOffline(req, res) {
    res.render('./pages/offline', {});
}



module.exports = {
    getLaunches,
    getShips,
    getCapsules,
    getRockets,
    getSingleLaunch,
    getSingleCapsule,
    getSingleRocket,
    getSingleShip,
    getOffline
}