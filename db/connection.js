const mongoose = require("mongoose");
let mongoURI = "";
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
} else {
    mongoURI = "mongodb://localhost:27017/animes";
}
mongoose.connect(mongoURI);
// mongoose.connect("mongodb://localhost:27017/animes")

module.exports = mongoose;
