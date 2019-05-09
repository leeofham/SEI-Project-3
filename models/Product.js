const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const productSchema = new mongoose.Schema({
  brandName: {
    type: String,
    required: 'Please enter the name of the brand eg Star Wars'
  },
  category: {
    type: String,
    required: 'Please enter Film, Game, Music or TV Show'
  },
  productType: {
    type: String,
    required: 'Please enter product type'
  },
  image: {
    type: String,
    required: 'Please add an image of the product'
  },
  rarity: {
    type: String,
    required: 'Please enter common, rare or legendary'
  },
  modifiedBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }
})

productSchema.plugin(uniqueValidator)


module.exports = mongoose.model('Product', productSchema)
