const mongoose = require('mongoose');

const mangaSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: [String], required: true },
  rating: { type: Number, default: 0 },
  description: { type: String },
  image: { type: String },
  chapters: [{ title: String, url: String }]
});

module.exports = mongoose.model('Manga', mangaSchema);
