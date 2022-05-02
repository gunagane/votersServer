const express = require('express');
var app = express()
var cors = require('cors')
const voterRouter = require('./routes/voter.router');
const db = require('./configurations/db.config')
app.use('/voter',voterRouter)

let crosOption = {
    origin: '*',
    methods: [ 'GET','POST'],
    allowedHeaders: [ 'content-type']
};

app.use(cors(crosOption))




module.exports = app
