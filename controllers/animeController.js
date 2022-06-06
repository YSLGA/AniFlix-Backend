const express = require('express')
const Anime = require('../models/anime')
const router = express.Router()


router.get('/', (req, res)=>{
    Anime.find().then(anime=>res.status(200).json({animes:anime}))
})