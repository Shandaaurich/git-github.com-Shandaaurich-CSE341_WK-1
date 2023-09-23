const express = require('express');

//data from db
const contacts = require('../controllers/contacts');

const router = express.Router();

//if we hit this route: localhost:8080/contacts/, then call a funtion in the controller folder (contacts is the url)
router.get('/', contacts.getData);

router.get('/:id', contacts.getData1);

module.exports = router;