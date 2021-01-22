const TransactionController = require('../controllers/transactionController')

const router = require('express').Router()

router.get('/', TransactionController.show)
router.get('/get_info/:id', TransactionController.details)
router.post('/purchase', TransactionController.create)

module.exports = router