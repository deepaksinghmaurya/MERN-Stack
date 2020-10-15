const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AvengerSchema = new Schema({
    name: {
        type: String,
        required: [true, 'This is a required field']
    },
    avenger: {
        type: String 
    },
    alive: {
        type: Boolean,
        default: true
    }
})

const Avenger = mongoose.model('avenger', AvengerSchema);
module.exports = Avenger;