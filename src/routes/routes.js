const express = require('express');

const router = express.Router();
const path = {

} = require('../controllers/routesController')

router.get('/', path.getLaunches);



// Make sure to export the router so it becomes available on imports
module.exports = router;