const { Customer } = require('../models')

class CustomerController {
    static login(req, res) {
        const email = req.body.email
        Customer.findOne({
            where: {email: email}
        })
        .then(user => {
            let payload = {
                id: user.id,
                email: user.email
            }
            req.userData = payload
            res.status(200).json({
                message: 'login success',
                id: user.id 
            })
            console.log(req.userData, '<<<<<<userData login line 19')
        })
        .catch(err => {
            res.status(500).json(err)
            console.log(err)
        })
    }
}

module.exports = CustomerController