const mongoose = require('mongoose')

const boxSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'What box do you want call your box?'
  },
  image: {
    type: String
  },
  total: {
    type: Number,
    required: 'Total number of items in box'
  },
  category: {
    type: String,
    required: 'What Brand have you chosen?'
  },
  description: {
    type: String,
    required: 'Add a description'
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  contents: [{ type: mongoose.Schema.ObjectId, ref: 'Product' }]
}, {
  toJSON: {
    virtuals: true
  }
})

boxSchema.virtual('price')
  .get(function() {
    switch(this.contents.length) {
      case 3: return 10
      case 6: return 15
      default: return 25
    }
  })
boxSchema.virtual('numberOfLegendary')
  .get(function() {
    switch(this.contents.length) {
      case 3: return 0
      case 6: return 1
      default: return 2
    }
  })
boxSchema.virtual('numberOfRare')
  .get(function() {
    switch(this.contents.length) {
      case 3: return 1
      case 6: return 2
      default: return 3
    }
  })
boxSchema.virtual('numberOfCommon')
  .get(function() {
    switch(this.contents.length) {
      case 3: return 2
      case 6: return 3
      default: return 4
    }
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
