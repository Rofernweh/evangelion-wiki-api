const express = require("express");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;

// Load data from JSON files
const characters = JSON.parse(fs.readFileSync("./data/characters.json", "utf-8"));
const episodes = JSON.parse(fs.readFileSync("./data/episodes.json", "utf-8"));
const mechs = JSON.parse(fs.readFileSync("./data/mechs.json", "utf-8"));
const angels = JSON.parse(fs.readFileSync("./data/angels.json", "utf-8"));

// Define endpoints for characters
app.get("/characters", (req, res) => {
  res.json(characters);
});

app.get("/characters/:id", (req, res) => {
  const characterId = parseInt(req.params.id);
  const character = characters.find((char) => char.id === characterId);
  if (!character) {
    return res
      .status(404)
      .json({
        error: "Resource not found",
        message: "The requested character does not exist.",
      });
  }
  res.json(character);
});

// Define endpoints for episodes
app.get("/episodes", (req, res) => {
  res.json(episodes);
});

app.get("/episodes/:id", (req, res) => {
  const episodeId = parseInt(req.params.id);
  const episode = episodes.find((episode) => episode.id === episodeId);
  if (!episode) {
    return res
      .status(404)
      .json({
        error: "Resource not found",
        message: "The requested episode does not exist.",
      });
  }
  res.json(episode);
});

// Define endpoints for mechs
app.get("/mechs", (req, res) => {
  res.json(mechs);
});

app.get("/mechs/:id", (req, res) => {
  const mechId = parseInt(req.params.id);
  const mech = mechs.find((mech) => mech.id === mechId);
  if (!mech) {
    return res
      .status(404)
      .json({
        error: "Resource not found",
        message: "The requested mech does not exist.",
      });
  }
  res.json(mech);
});

// Define endpoints for angels
app.get("/angels", (req, res) => {
  res.json(angels);
});

app.get("/angels/:id", (req, res) => {
  const angelId = parseInt(req.params.id);
  const angel = angels.find((angel) => angel.id === angelId);
  if (!angel) {
    return res
      .status(404)
      .json({
        error: "Resource not found",
        message: "The requested angel does not exist.",
      });
  }
  res.json(angel);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
