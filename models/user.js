const mongoose = require("../db/connection")

const userSchema = new mongoose.Schema({
    name: String
})

module.exports = mongoose.model('User', userSchema)