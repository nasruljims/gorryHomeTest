const { Ticket, Events } = require('../models')

class TicketController {
    static show(req, res) {
        Ticket.findAll()
        .then(ticket => res.status(200).json(ticket))
        .catch(err => {
            res.status(500).json(err)
            console.log(err)
        })
    }

    static create(req, res) {
        const {name, type, price, quota} = req.body
        const { id } = req.params
        Events.findByPk(id)
        .then(event => {
            if(!event) throw {message: 'Event not found'}
            return Ticket.create({
                name,
                type, 
                price, 
                quota, 
                EventId: id
            })
        })
        .then(ticket => {
            res.status(201).json({
                message: 'Success to create ticket',
                ticket
            })
        })
        .catch(err => {
            res.status(500).json(err)
            console.log(err)
        })
    }
}

module.exports = TicketController