const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
    show
};

function show(req, res) {
    Flight.findById(req.params.id, function (err, flightFromTheDataBase) {
        res.render('flights/show', { title: 'Flight Detail', flight: flightFromTheDataBase })
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