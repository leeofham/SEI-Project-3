const port = process.env.PORT || 4000
const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/nerd-crate-api'
const secret = process.env.SECRET || 'yg<R~CjLW( 7M$h8'

module.exports = { port, dbUri, secret }
