const { v4: uuidv4 } = require('uuid');
const { Cart, Ticket } = require('../models');

class CartController {
    static show(req, res) {
        Cart.findAll({
            where: {status: false},
            include: Ticket
        })
        .then(data => {
            // console.log(data[0].Ticket.EventId, '<<<<<<<<<<<<<<<<')
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json(err)
            console.log(err)
        })
    }

    static create(req, res) {
        const ticketId = req.params.id
        let eventId = ''
        let price = 0
        Ticket.findByPk(ticketId)
        .then(ticket => {
            if(!ticket) throw {message: 'Ticket not found'}
            if(ticket.quota < 1) throw {message: 'Out of stock'}
            price = ticket.price
            eventId = ticket.EventId
            return Cart.findAll({
                where: {status: false},
                include: Ticket
            })
        })
        .then(data => {
            if(data.length == 0) {
                return Cart.findOne({
                    where: {
                        TicketId: ticketId,
                        status: false
                    }                
                })
            }else{
                if(data[0].Ticket.EventId != eventId) throw {message: 'You can only buy ticket in the same event'}
                return Cart.findOne({
                    where: {
                        TicketId: ticketId,
                        status: false
                    },
                    include: Ticket
                })
            }
        })
        .then(data => {
            if(!data) {
                return Cart.create({
                    quantity: 1,
                    status: false,
                    TicketId: ticketId,
                    total: price
                })
            }else{
                let newQuantity = data.quantity
                let newTotal = data.total
                if(newQuantity < data.Ticket.quota) {
                    newQuantity += 1
                    newTotal = price * newQuantity
                }else{
                    throw {message: 'Out of quota'}
                }
                return Cart.update({
                    quantity: newQuantity,
                    total: newTotal
                },
                {
                    where: { 
                        TicketId: ticketId,
                        status: false
                    },
                    returning: true
                })
            }   
        })
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(500).json(err)
            console.log(err)
        })
    }

    static minCart(req, res) {
        const ticketId = req.params.id
        Cart.findOne({
            where: {
                TicketId: ticketId,
                status: false
            }
        })
        .then(data => {
            if(!data) {
                throw {message: 'Cart not found'}
            }else{
                let newQuantity = data.quantity
                let price = data.total / data.quantity
                let newTotal = data.total
                if(data.quantity > 1) {
                    newQuantity -= 1
                    newTotal -= price
                    return Cart.update({
                        quantity: newQuantity,
                        total: newTotal
                    },
                    {
                        where: {
                            id: data.id,
                            status: false
                        }, 
                        returning: true
                    })
                }else{
                    throw {message: 'minimum quantity 1'}
                }
            }
        })
        .then(data => res.status(201).json(data))
        .catch(err => {
            res.status(500).json(err)
            console.log(err)
        })
    }

    static delete(req, res) {
        const cartId = req.params.id
        Cart.destroy({
            where: {id: cartId}
        })
        .then(data => res.status(200).json({data, message: 'Cart deleted'}))
        .catch(err => {
            res.status(500).json(err)
            console.log(err)
        })
    }
}

module.exports = CartController