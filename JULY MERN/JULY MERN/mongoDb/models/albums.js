const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 *  Album {
 *          name: 'Minutes to midnight',
 *          track: '10'
 *          songs: [{ title: Leave out all the rest, artist: Linkin Park} ,]
 * }
 */

 const SongListSchema = new Schema({
    title: String,
    artist: String
})

const AlbumSchema = new Schema({
    name: String,
    track: Number,
    songs: [SongListSchema]
})

const Album = mongoose.model('Album', AlbumSchema);
console.log(Album);

module.exports = Album;
 