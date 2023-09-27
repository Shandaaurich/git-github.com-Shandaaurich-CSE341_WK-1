const express = require('express');

//data from db
const contacts = require('../controllers/contacts');

const router = express.Router();

//if we hit this route: localhost:8080/contacts/, then call a funtion in the controller folder (contacts is the url)
//getting all the contacts from the collection
router.get('/', contacts.getData);

//getting only the contact with the specified id
router.get('/:id', contacts.getData1);

//adding a new contact
router.post('/', contacts.createContact);

//edit a contact by id
router.put('/:id', contacts.editContact);

//delete a contact by id
// router.delete('/:id', contacts.deleteContact);


module.exports = router;