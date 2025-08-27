// backend/models/Society.js

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  type: { type: String, enum: ['image', 'video', 'text', 'poll', 'event'], required: true },
  content: { type: mongoose.Schema.Types.Mixed },
  createdAt: { type: Date, default: Date.now }
});

const societySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  approved: { type: Boolean, default: false },
  posts: [postSchema],
});

const Society = mongoose.model('Society', societySchema);

module.exports = Society;
