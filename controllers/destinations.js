const Flight = require('../models/flight')

module.exports = {
    create
}

function create(req, res) {
    // find flight from the database 
    Flight.findById(req.params.id, function (err, flightFromTheDatabase) {
        console.log(flightFromTheDatabase);
        flightFromTheDatabase.destinations.push(req.body);
        flightFromTheDatabase.save(function (err) {
            console.log(flightFromTheDatabase)
            res.redirect(`/flights/${flightFromTheDatabase._id}`)
        })
    })
}