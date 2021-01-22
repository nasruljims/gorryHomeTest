const router = require('express').Router()
const eventRoute = require('./event')
const locRoute = require('./location')
const ticketRoute = require('./ticket')
const custRoute = require('./customer')
const cartRoute = require('./cart')
const transRoute = require('./transaction')

router.get('/', (req, res) => {
    res.send('welcome')
})

router.use('/event', eventRoute)
router.use('/location', locRoute)
router.use('/ticket', ticketRoute)
router.use('/customer', custRoute)
router.use('/cart', cartRoute)
router.use('/transaction', transRoute)

module.exports = router