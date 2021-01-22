const LocationController = require('../controllers/locationController')

const router = require('express').Router()

router.get('/', LocationController.show)
router.post('/create', LocationController.create)

module.exports = router