const TicketController = require('../controllers/ticketController')

const router = require('express').Router()

router.get('/', TicketController.show)

module.exports = router