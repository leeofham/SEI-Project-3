const mongoose = require('mongoose')

const boxSchema = new mongoose.Schema({
  boxType: {
    type: String,
    required: 'What box do you want?'
  },
  total: {
    type: Number,
    required: 'Total number of items in box'
  },
  numberOfLegendary: {
    type: Number
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
