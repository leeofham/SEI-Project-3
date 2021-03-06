const router = require('express').Router()
const productController = require('../controllers/product')
const authController = require('../controllers/auth')
const boxesController = require('../controllers/box')
const userController = require('../controllers/user')
const secureRoute = require('../lib/secureRoute')

router.get('/', (req, res) => res.json({ message: 'Welcome to Nerd Crate API' }))

router.get('/product', productController.index) // might not need this route
router.get('/product/:id', productController.show) // might not need this route

router.get('/premade', boxesController.index)
router.get('/premade/:id', boxesController.show)

router.post('/boxes', secureRoute, boxesController.create)
router.get('/boxes', boxesController.index)
router.get('/boxes/:id', boxesController.show)
router.put('/boxes/:id', boxesController.update)
router.delete('/boxes/:id', boxesController.delete)

router.post('/register', authController.register)
router.post('/login', authController.login)

router.get('/users/:id', userController.show)
router.put('/users/:id', userController.update)

module.exports = router
