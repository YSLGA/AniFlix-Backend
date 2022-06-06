const mongoose = require('../db/connection')

const animeSchema = new mongoose.Schema({
    name: String,
    yearReleased: String,
    genre: String

})

module.exports = mongoose.model('Anime', animeSchema)