const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const morgan = require('morgan')
const app = express();
dotenv.config();
app.use(morgan("common"))

app.get("/", (req, res) => {
  res.json("APi for note");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.json(note);
});

const PORT = process.env.PORT;
app.listen(PORT, console.log(`server started on PORT ${PORT}`));
