const express = require('express');
var router = express.Router();
var voterController = require('../controllers/voter.controller')

router.get('/getVoters',voterController.getVoters)

router.post('/postregister',voterController.postVoters)


module.exports = router