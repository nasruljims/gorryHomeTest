const { Transaction, Cart, Ticket } = require('../models')

class TransactionController {
    static show(req, res) {
        Transaction.findAll()
        .then(data => res.status(200).json(data))
        .catch(err => {
            res.status(500).json(err)
            console.log(err)
        })
    }

    static details(req, res) {
        const { id } = req.params
        Transaction.findByPk(id)
        .then(data => res.status(200).json(data))
        .catch(err => {
            res.status(500).json(err)
            console.log(err)
        })
    }

    static create(req, res) {
        // const userId = req.userData.id
        let total = 0
        Cart.findAll({
            where: {status: false}
        })
        .then(cart => {
            if(!cart) throw {message: 'Cart not found'}
            cart.forEach(element => {
                total += element.total
                Ticket.findByPk(element.TicketId)
                .then(ticket => {
                    Ticket.update({
                        quota: ticket.quota - element.quantity,
                    }, {
                        where: {id: element.TicketId}
                    })
                })
                .catch(err => res.status(500).json(err))
            });
            return Transaction.create({
                total,
                CustomerId: '97afa082-1d55-46c1-824e-023b8c2436d5'
            })
        })
        .then(transaction => {
            return Cart.update({
                TransactionId: transaction.id,
                status: true
            },{
                where: {
                    status: false
                },
                returning: true
            })
        })
        .then(data => res.status(200).json({
            message: 'Transaction success',
            data
        }))
        .catch(err => {
            res.status(500).json(err)
            console.log(err)
        })
    }
}

module.exports = TransactionController