const assert = require('assert');
const User = require('../models/users');

describe('Updating User Record', () => {

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

    // update test 
    it('it updates one record from the user colletion', done => {
        User.findOneAndUpdate({ username: 'Jon_Stark'}, {username: 'Bran_Stark', isLogin: true}, {useFindAndModify: false})
        .then( data => {
            // console.log(data);
            User.findById({_id: user._id}).then( result => {
                // console.log(result);
                assert(result.username === 'Bran_Stark')
                done();
            })
        })
    })

    // Using the update operator
    it('it increments the age by 1', done => {
        User.updateMany({}, { $inc: { age: 1}}).then(data => {
            // console.log(data);
            User.findOne({username: 'Jon_Stark'}).then( result => {
                // console.log(result);
                assert(result.age === 16)
                done();
            })
        })
    })
})