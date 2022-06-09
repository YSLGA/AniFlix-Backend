const mongoose = require("../db/connection")

const animeMovieSchema = new mongoose.Schema({
    title: String,
    yearReleased: String,
    genre: String,
    image: String
})

module.exports = mongoose.model('AnimeMovie', animeMovieSchema)