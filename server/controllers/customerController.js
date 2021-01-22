const { Customer } = require('../models')

class CustomerController {
    static login(req, res) {
        Customer.findOne({
            where: {email: 'nasrul@mail.com'}
        })
        .then(user => {
            let payload = {
                id: user.id,
                email: user.email
            }
            req.userData = payload
            res.status(200).json({
                message: 'login success',
                user: req.userData
            })
        })
        .catch(err => {
            res.status(500).json(err)
            console.log(err)
        })
    }
}

module.exports = CustomerController