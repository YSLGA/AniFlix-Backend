const express = require('express')
const Anime = require('../models/anime')
const router = express.Router()


router.get('/', (req, res)=>{
    Anime.find().then(anime=>res.status(200).json({animes:anime}))
})

router.get('/:id', (req, res)=>{
    Anime.findById(req.params.id).then(anime=>res.status(200).json({animes:anime}))
})

router.post('/', (req, res)=>{
    Anime.create(req.body).then(anime=>res.status(200).json({animes:anime}))
})

router.patch('/:id', (req, res)=>{
    Anime.findByIdAndUpdate(req.params.id, req.body, {new:true}).then(anime=>res.status(200).json({animes:anime}))
})

router.delete('/:id', (req, res)=>{
    Anime.findByIdAndDelete(req.params.id).then(anime=>res.status(200).json({animes:anime}))
})

module.exports = router;