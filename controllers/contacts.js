//connect to MongoDB
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

//get all data from contacts collection
const getData = async (req, res, next) => {
    //wait for connection find()everything inside
    const result = await mongodb.getDb().db().collection('contacts').find();
    //return as an array and loop through
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

//get only the collection object with the ObjectId
const getData1 = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('contacts').find({ _id: userId });
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

// //add a contact to the collection
const createContact = async (req, res, next) => {
    const contactSchema = {

        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday

    };
    const result = await mongodb.getDb().db().collection('contacts').insertOne(contactSchema);
    if (result.acknowledged) {
        res.status(201).json(result);
    } else {
        res.status(500).json(result.error || "Did not create the contact")
    }

};

const editContact = async (req, res, next) => {
    const contactId = new ObjectId(req.params.id);
    const contact = {

        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday

    };
    const result = await mongodb.getDb().db().collection('contacts').replaceOne({ _id: contactId }); {
        if (result.modifiedCount > 0) {
            res.status(201).send();
        } else {
            res.status(500).json(result.error || "Did not update the contact")
        }
    };
};

const deleteContact = async (req, res, next) => {
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('contacts').remove({ _id: contactId }, true);

    if (result.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(result.error || "Did not delete the contact")
    }
};


//export the data from the db
module.exports = {
    getData, getData1, createContact, editContact, deleteContact
};