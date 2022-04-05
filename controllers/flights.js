const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show,
    // newTicket
};

// function newTicket(req, res) {
//     Flight.findById(req.params.id, function (err, flight) {
//         // console.log(flight, ' < flight object');
//         res.render('tickets/new', { flight, title: 'New Ticket' })
//     })
// }

function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        Ticket.find({ flight: flight._id }, function (err2, tickets) {
            res.render('flights/show', { flight, tickets, title: 'Flight Detail' })
        })
    })
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight' });
};

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function (err) {
        if (err) return res.render('flights/new');
        console.log(flight);
        res.redirect('/flights');
    });
};

function index(req, res) {
    Flight.find({}, function (err, flights) {
        res.render('flights/index', {
            flights,
            title: 'All Flights'
        })
    })
}