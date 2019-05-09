// a global error handler
// to handle our erorrs all in one place
// an error handler is a special type of middleware
// it has FOUR arguments
function errorHandler(err, req, res, next) {
  console.log(err) // log the error

  // set some reasonable defaults
  let status = 500
  let message = err.message || 'Internal server error'
  let errors = null

  // tidy up the validation error from mongoose
  if(err.name === 'ValidationError') {
    status = 422
    errors = {}
    message = 'Validation failed'
    for(const field in err.errors) {
      errors[field] = err.errors[field].message
    }
  }

  // send the response
  res.status(status).json({ message, errors })
  next(err)

}

module.exports = errorHandler
