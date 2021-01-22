const { Locations } = require('../models')
const { v4: uuidv4 } = require('uuid');

class LocationController {
    static show(req, res) {
        Locations.findAll()
        .then(location => res.status(200).json(location))
        .catch(err => {
            res.status(500).json(err)
            console.log(err)
        })
    }

    static create(req, res) {
        const {address, city} = req.body
        Locations.create({
            address,
            city
        })
        .then(location => {
            res.status(201).json({
                message: 'Location success to create',
                id: location.id,
                address: location.address
            })
        })
        .catch(err => {
            res.status(500).json(err)
            console.log(err)
        })
    }
}

module.exports = LocationController