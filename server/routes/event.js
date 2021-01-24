const EventController = require('../controllers/eventController')
const TicketController = require('../controllers/ticketController')
const router = require('express').Router()

router.get('/', EventController.show)
router.get('/get_info/:id', EventController.details)
router.post('/create', EventController.create)
router.post('/ticket/create', TicketController.create)

module.exports = router