const mongoose = require('mongoose')

const boxSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'What box do you want call your box?'
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
  contents: [{ type: mongoose.Schema.ObjectId, ref: 'Product' }]
})

boxSchema.pre('save', function productToBox(next){

  this.model('Product').find()
    .then(products => {
      let randomProduct = products[Math.floor(Math.random() * products.length)]
      while(this.contents.length < this.total && !this.contents.includes(randomProduct)) {
        this.contents.push(randomProduct)
        randomProduct = products[Math.floor(Math.random() * products.length)]
      }
      next()

    })

    .catch(next) // handle our errors
})

module.exports = mongoose.model('Box', boxSchema)
