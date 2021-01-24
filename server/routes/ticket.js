const TicketController = require('../controllers/ticketController')

const router = require('express').Router()

router.get('/:eventId', TicketController.show)
router.delete('/:id', TicketController.delete)

module.exports = router