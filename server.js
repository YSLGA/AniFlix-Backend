const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;

const animeController = require("./controllers/animeController");
const animeMovieController = require("./controllers/animeMovieController");

app.use(cors());
app.use(express.json());

app.use("/animes", animeController);
app.use("/animeMovies", animeMovieController);

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
