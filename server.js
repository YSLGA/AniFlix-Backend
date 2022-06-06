const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const animeController = require('./controllers/animeController')

const PORT = process.env.PORT
app.use(cors())
app.use(express.json())

app.use('/animes', animeController)







app.listen(PORT, ()=>{
    console.log('we are live');
} )