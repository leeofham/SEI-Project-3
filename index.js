const express = require('express')
const mongoose = require('mongoose')
const routes = require('./config/routes')

const app = express()

mongoose.connect('mongodb://localhost:27017/nerd-crate-api')

app.use('/api', routes)

app.listen(4000, () => console.log('Nerd Crate is on port 4000'))
