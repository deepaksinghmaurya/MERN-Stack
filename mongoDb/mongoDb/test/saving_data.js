const assert = require('assert');
const GOTChar = require('../models/gotChars');

describe('Saving records', () => {

    it('it saves record to the database', function(done){
        let character = new GOTChar({
            name: 'Jon',
            house: 'Stark'
        });

        character.save().then(() => {
            assert(character.isNew === false)
            done();
        })
    })
})