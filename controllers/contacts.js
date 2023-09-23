//connect to MongoDB
const mongodb = require('../db/connect');


const getData = async (req, res) => {
    //wait for connection find()everything inside
    const result = await mongodb.getDb().db().collection('contacts').find();
    //return as an array and loop through
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0].contacts);
    });
};

//export the data from the db
module.exports = { getData };