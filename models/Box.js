const mongoose = require('mongoose')

const boxSchema = new mongoose.Schema({
  boxType: {
    type: String,
    required: 'What box size do you want?'
  },
  numberOfRare: {
    type: Number
  },
  numberOfCommon: {
    type: Number
  },
  contents: {
    type: Array
  }
})

module.exports = mongoose.model('Box', boxSchema)
