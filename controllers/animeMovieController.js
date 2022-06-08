const express = require('express')
const AnimeMovie = require('../models/animeMovie')
const router = express.Router();


router.get('/', (req,res)=>{
    AnimeMovie.find().then(movie=>res.status(200).json({movies:movie}))
})

router.get('/:id', (req, res)=>{
    AnimeMovie.findById(req.params.id).then(movie=>res.status(200).json({movies: movie}))
})

router.post('/', (req, res)=>{
    AnimeMovie.create(req.body).then(movie=>res.json({movies: movie}))
})

router.patch('/:id', (req, res)=> {
    AnimeMovie.findByIdAndUpdate(req.params.id, req.body, {new:true}).then(movie=>res.status(200).json({movies:movie}))
} )

router.delete('/:id', (req, res)=>{
    AnimeMovie.findByIdAndDelete(req.params.id).then(movie=>res.status(200).json({movies:movie}))
})

module.exports = router;