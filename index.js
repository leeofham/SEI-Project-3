const express = require('express')
const mongoose = require('mongoose')
const routes = require('./config/routes')
const { port, dbUri } = require('./config/environments')
const bodyParser = require('body-parser')

const app = express()

mongoose.connect(dbUri)
app.use(express.static(`${__dirname}/dist`))
app.use(bodyParser.json())
app.use('/api', routes)

app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))

app.listen(port, () => console.log(`Nerd Crate is on port ${port}}`))
