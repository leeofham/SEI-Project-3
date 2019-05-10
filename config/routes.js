const router = require('express').Router()
const productController = require('../controllers/product')
const authController = require('../controllers/auth')
const boxesController = require('../controllers/box')

router.get('/', (req, res) => res.json({ message: 'Welcome to Nerd Crate API' }))

router.get('/product', productController.index) // might not need this route
router.get('/product/:id', productController.show) // might not need this route

router.get('/premade', boxesController.index)
router.get('/premade/:id', boxesController.show)

router.get('/mystery/new', productController.pushProducts, boxesController.create)
router.get('/mystery/mycrate', boxesController.index)
router.put('/mystery/mycrate/:id', boxesController.update)
router.delete('/mystery/mycrate/:id', boxesController.delete)

router.post('/register', authController.register)
router.post('/login', authController.login)

module.exports = router
