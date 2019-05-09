const router = require('express').Router()
const productController = require('../controllers/products') 
const authController = require('../controllers/auth')

router.get('/', (req, res) => res.json({ message: 'Welcome to Nerd Crate API' }))

router.get('/product', productController.index) // might not need this route
router.get('/product/:id', productController.show) // might not need this route

router.post('/register', authController.register)
router.post('/login', authController.login)

module.exports = router
