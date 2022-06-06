const express = require('express')
const User = require('../models/user')
const router = express.Router();


router.get('/', (req,res)=>{
    User.find().then(user=>res.status(200).json({users:user}))
})

router.get('/:id', (req, res)=>{
    User.findById(req.params.id).then(user=>res.status(200).json({users: user}))
})

router.post('/', (req, res)=>{
    User.create(req.body).then(user=>res.json({users: user}))
})

module.exports = router;