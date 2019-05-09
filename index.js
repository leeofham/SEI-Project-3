const express = require('express')
const mongoose = require('mongoose')
const routes = require('./config/routes')
const { port, dbUri } = require('./config/environments')

const app = express()

mongoose.connect(dbUri)

app.use('/api', routes)

app.listen(port, () => console.log(`Nerd Crate is on port ${port}}`))
