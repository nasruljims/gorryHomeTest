const CustomerController = require('../controllers/customerController')

const router = require('express').Router()

router.post('/login', CustomerController.login)

module.exports = router