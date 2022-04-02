var express = require('express');
var router = express.Router();
const destinationsController = require('../controllers/destinations');

// POST /flights/:id/destinations 
router.post('/flights/:id/destinations', destinationsController.create)

module.exports = router;