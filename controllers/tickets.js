const Flight = require('../models/flight')
const Ticket = require('../models/ticket');

module.exports = {
    newTicket,
    create
}

// function newTicket(req, res) {
//     console.log('newticket')
//     Flight.findById(req.params.id, function (err, flight) {
//         Ticket.find({ flight: flight._id }, function (err, tickets) {
//             res.render('tickets/new',
//                 tickets
//             )
//         })
//     })
// }

function create(req, res) {
    Flight.findById(req.params.id, function (err, flightDocument) {
        req.body.flight = flightDocument._id
        console.log(flightDocument, '< flight object')
        Ticket.create(req.body, function (err, ticket) {
            res.redirect(`/flights/${flightDocument._id}`)
        })
    })
}

function newTicket(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        // console.log(flight, ' < flight object');
        res.render('tickets/new', { flight, title: 'New Ticket' })
    })
}

