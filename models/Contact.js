const mongoose = require('mongoose');

//create a schema of house the data looks
const contactSchema = mongoose.Schema({

    id: { type: Number, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    favoriteColor: { type: String, required: true },
    birthday: { type: Date, required: true },
    
});

module.exports = mongoose.model('Contact', contactSchema);