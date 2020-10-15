const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gotSchema = new Schema({
    name: String,
    house: String
});

const GOTModel = mongoose.model('GOTChar', gotSchema);

module.exports = GOTModel;