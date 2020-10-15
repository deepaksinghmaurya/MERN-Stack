const assert = require('assert');
const mongoose = require('mongoose');
const Album = require('../models/albums');

// console.log(Album);
describe('Nested Document Test', () => {

    beforeEach( (done) => {
        mongoose.connection.collections.albums.drop( () => {
            done();
        });
    });

    //Create Test 
    it( 'it creates an album with sub-documents', done => {
        let newAlbum = new Album({
            name: 'Hybrid Theory',
            track: 2,
            songs: [
                { title: 'Crawling', artist: 'Chester'},
                { title: 'Papercut', artist: 'Mike Shonda'},
            ]
        })

        newAlbum.save().then( data => {
            console.log(data);
            Album.findOne({name: 'Hybrid Theory'}).then( record => {
                assert( record.songs.length === 2);
                done();
            })
        })
    })

    it(' it adds a song to the album', done => {
        let newAlbum = new Album({
            name: 'Hybrid Theory',
            track: 2,
            songs: [
                { title: 'Crawling', artist: 'Chester'},
                { title: 'Papercut', artist: 'Mike Shonda'},
            ]
        })

        newAlbum.save().then( () => {
            Album.findOne({ name: 'Hybrid Theory'}).then( record => {
                // add a song to the songs document
                record.songs.push({ title: 'A Place for My Head', artist: 'Chester & Mike'})
                record.save().then( data => {
                    Album.findOne( { name: 'Hybrid Theory'}).then( rec => {
                        assert(rec.songs.length === 3);
                        done();
                    })
                })
            })
        })
    })
})

