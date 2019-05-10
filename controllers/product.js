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

module.exports = {
  index: indexRoute,
  show: showRoute
}
