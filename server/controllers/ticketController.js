const { Ticket, Events } = require('../models')

class TicketController {
    static show(req, res) {
        const { eventId } = req.params
        Ticket.findAll({
            where: {EventId: eventId}
        })
        .then(ticket => {
            // console.log(ticket)
            res.status(200).json(ticket)
        })
        .catch(err => {
            res.status(500).json(err)
            // console.log(err)
        })
    }

    static create(req, res) {
        const {name, type, price, quota, EventId} = req.body
        // const { id } = req.params
        Events.findByPk(EventId)
        .then(event => {
            if(!event) throw {message: 'Event not found'}
            return Ticket.create({
                name,
                type, 
                price, 
                quota, 
                EventId
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

    static delete(req, res) {
        const ticketId = req.params.id
        Ticket.destroy({
            where: {id: ticketId}
        })
        .then(data => res.status(200).json({message: 'Ticket deleted', data}))
        .catch(err => {
            res.status(500).json(err)
            console.log(err)
        })
    }
}

module.exports = TicketController