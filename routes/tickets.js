const express = require('express');
const router = express.Router();
const ticketsController = require('../controllers/tickets')


router.get('/flights/:id/tickets/new', ticketsController.newTicket);
// flights/:id/tickets/new 
router.post('/flights/:id/tickets/new', ticketsController.create);




module.exports = router; 