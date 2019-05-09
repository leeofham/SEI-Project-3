const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost:27017/nerd-crate-api')

app.get('/', (req, res) => res.json({ message: 'Welcome to Nerd Crate API'}))

app.listen(4000, () => console.log('Nerd Crate is on port 4000'))
