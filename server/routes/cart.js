const CartController = require('../controllers/cartController')
const router = require('express').Router()

router.get('/', CartController.show)
router.post('/:id', CartController.create)
router.put('/:id', CartController.minCart)
router.delete('/:id', CartController.delete)

module.exports = router