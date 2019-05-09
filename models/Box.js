const mongoose = require('mongoose')

const boxSchema = new mongoose.Schema({
  smallBox: {
    type: String,
    required: 'Please enter the small box required',
    numberOfRare: '1',
    numberOfCommon: '2',
    total: '3'
  },
  mediumBox: {
    type: String,
    required: 'Please enter the medium box required',
    numberOfLegendary: '1',
    numberOfRare: '2',
    numberOfCommon: '3',
    total: '6'
  },
  largeBox: {
    type: String,
    required: 'Please enter the large box required',
    numberOfLegendary: '2',
    numberOfRare: '3',
    numberOfCommon: '4',
    total: '9'
  }

})


module.exports = mongoose.model('Box', boxSchema)
