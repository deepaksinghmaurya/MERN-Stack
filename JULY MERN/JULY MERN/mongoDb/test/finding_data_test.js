const assert = require('assert');
const User = require('../models/users');

describe('Finding records', () => {

    let user;
    // First saving the data to the db.
    beforeEach(function(done){
         user = new User({
                username: 'Jon_Stark',
                email: 'jon@stark.com',
                age: 15,
                isLogin: false
            });
        
        user.save().then( () => { done(); });
    })

    // Creating Tests
    it('it finds one record from database', (done) => {
        // Promise Object
        User.findOne({ username: 'Jon_Stark', age: 15}).then( (result) => {
            // console.log(result);
            assert ( result.username === 'Jon_Stark');
            done();
        })
    })

    it('it finds one record by ID from the database', (done) => {
        User.findOne({ _id: user._id}).then( (result) => {
            assert( result._id.toString() === user._id.toString() )
            done();
        })
    })
})