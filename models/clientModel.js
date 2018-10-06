const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//design the two schema below and use sub docs 
//to define the relationship between posts and comments

let clientSchema = new mongoose.Schema({
    name: String,
    email: String,
    firstContact: String,
    emailType: String,
    sold: Boolean,
    owner: String,
    country: String
});

let Client = mongoose.model('client', clientSchema);

module.exports = {
    Client : Client
};

