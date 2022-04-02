var express = require('express');
var router = express.Router();
const flightController = require('../controllers/flights');

// GET /flights 
router.get('/', flightController.index);
// Get /flights/new 
router.get('/new', flightController.new);
// /flights/ 
router.get('/:id', flightController.show);
// POST /flights 
router.post('/', flightController.create);

// /* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
