const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    email: String,
    age: Number,
    isLogin: Boolean,
    dob: String
});

const User = mongoose.model('Person', UserSchema);

module.exports = User;