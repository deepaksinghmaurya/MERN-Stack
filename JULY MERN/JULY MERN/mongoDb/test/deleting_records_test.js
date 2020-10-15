const assert = require('assert');
const User = require('../models/users');

describe('Deleting records', () => {
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

    it('it deletes one record from the database', done => {
        User.findOneAndDelete( {username: 'Jon_Stark'}).then( data => {
            console.log(data);
            User.findOne({ username: 'Jon_Stark'}).then( result => {
                console.log(result);
                assert( result === null);
                done();
            })
        })
    })
})