const { Events, Locations } = require('../models')

class EventController {
    static show(req, res) {
        Events.findAll()
        .then(event => res.status(200).json(event))
        .catch(err => {
            res.status(500).json(err)
            console.log(err)
        })
    }

    static details(req, res) {
        const { id } = req.params
        Events.findByPk(id)
        .then(event => res.status(200).json(event))
        .catch(err => {
            res.status(500).json(err)
            console.log(err)
        })
    }

    static create(req, res) {
        const {name, start_date, end_date, LocationId} = req.body
        Locations.findByPk(LocationId)
        .then(location => {
            if(!location) throw {message: 'Location not found'}
            return Events.create({
                name,
                start_date: new Date(start_date), //yyyy-mm-dd
                end_date: new Date(end_date),
                LocationId
            })
        })
        .then(event => {
            res.status(201).json({
                message: 'Event success to create',
                id: event.id,
                name: event.name
            })
        })
        .catch(err => {
            res.status(500).json(err)
            console.log(err)
        })
    }
}

module.exports = EventController