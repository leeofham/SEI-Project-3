const User = require('../models/User')

function showRoute(req, res, next){
  User
    .findById(req.params.id)
    .then(user => res.status(200).json(user))
    .catch(next)
}

function updateRoute (req, res, next) {
  User
    .findById(req.params.id)
    .then(user => user.set(req.body))
    .then(user => user.save())
    .then(user => res.status(200).json(user))
    .catch(next)
}

module.exports = {
  show: showRoute,
  update: updateRoute
}
