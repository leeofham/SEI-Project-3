const mongoose = require('mongoose')

const boxSchema = new mongoose.Schema({
  box: {
    type: String,
    required: 'What box size do you want?',
    numberOfRare: Number,
    numberOfCommon: Number,
    total: Number,
    contents: Array
  }
})

module.exports = mongoose.model('Box', boxSchema)
