const express = require('express');
const Manga = require('../models/Manga');

const app = express();
app.use(express.json());

app.get('/new', async (req, res) => {
  const mangas = await Manga.find().sort({ createdAt: -1 }).limit(10);
  res.json(mangas);
});

app.get('/popular', async (req, res) => {
  const mangas = await Manga.find().sort({ rating: -1 }).limit(10);
  res.json(mangas);
});

app.get('/recommended', async (req, res) => {
  const mangas = await Manga.aggregate([{ $sample: { size: 10 } }]);
  res.json(mangas);
});

module.exports = app;
