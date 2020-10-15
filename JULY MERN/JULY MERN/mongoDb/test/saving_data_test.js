const assert = require('assert');
const GOTChar = require('../models/gotChars');
const User = require('../models/users');

describe('Saving records', () => {

    it('it saves GOT chars', function(done){
        let character = new GOTChar({
            name: 'Jon',
            house: 'Stark'
        });

        character.save().then(() => {
            assert(character.isNew === false)
            done();
        })
    })

    // it('it saves Users', function(done){
    //     let user = new User({
    //         username: 'Jon_Stark',
    //         email: 'jon@stark.com',
    //         age: 15,
    //         isLogin: false
    //     });

    //     user.save().then(() => {
    //         assert(user.isNew === false)
    //         done();
    //     })
    // })
})