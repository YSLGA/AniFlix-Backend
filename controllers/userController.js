const express = require('express')
const User = require('../models/user')
const router = express.Router();


router.get('/', (req,res)=>{
    User.find().then(user=>res.status(200).json({users:user}))
})