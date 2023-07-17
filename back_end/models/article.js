

const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  local: { type: String },
  description: { type: String, required: true },
  date_pub: { type: Date, default: Date.now },
  prix: { type: Number },
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
