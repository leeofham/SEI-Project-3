const Box = require('../models/Box')

function indexRoute(req, res, next){
  //get all products from the database
  Box.find()
    .then(boxes => res.json(boxes))
    .catch(next)
}

function showRoute(req, res, next){
  Box.findById(req.params.id)
    .then(box => res.json(box))
    .catch(next)
}

function createRoute(req, res, next) {
  // take the total number of products the box
  // add products._id * the total contents to the box
  req.body.createdBy = req.currentUser
  Box.create(req.body)
    .then(box => {
      res.status(201).json(box) // send it as JSON
    })
    .catch(next) // handle our errors
}

function updateRoute(req, res, next) {
  // req.body.modifiedBy = req.currentUser

  Box.findById(req.params.id)
    .then(box => box.set(req.body))
    .then(box => box.save())
    .then(box => res.json(box))
    .catch(next)
}

function deleteRoute(req, res, next) {
  Box.findById(req.params.id)
    .then(box => box.remove())
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute
}
