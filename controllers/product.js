const Product = require('../models/Product')

function indexRoute(req, res, next){
  //get all products from the database
  Product.find()
    .then(product => res.json(product))
    .catch(next)
}

function showRoute(req, res, next){
  Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(next)
}

function productToBoxRoute(req, res, next){

  Product.find()
    .then(product => {
      const boxTotal = req.body.total
      const idArray = []

      function randIndex(){
        for(let i = 0; i < boxTotal; i++){
          const randomIndex = Math.floor(Math.random() * product.length)
          if(idArray.includes(randomIndex)){
            randIndex()
          } else {
            idArray.push(product[randomIndex]._id)
          }
          req.body.contents = idArray
        }
      }
      randIndex()
      next()

    })

    .catch(next) // handle our errors
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  pushProducts: productToBoxRoute
}
