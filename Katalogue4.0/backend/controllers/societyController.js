// backend/controllers/societyController.js

const Society = require('../models/Society.js');

const getAllSocieties = async (req, res) => {
  try {
    const societies = await Society.find({ approved: true }).select('name posts approved');
    res.json(societies);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getSocietyById = async (req, res) => {
  try {
    const society = await Society.findById(req.params.id);
    if (!society || !society.approved) {
      return res.status(404).json({ message: 'Society not found or not approved' });
    }
    res.json(society);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const addPostToSociety = async (req, res) => {
  const { id } = req.user; // society id from JWT
  const { type, content } = req.body;

  try {
    const society = await Society.findById(id);
    if (!society) return res.status(404).json({ message: 'Society not found' });

    society.posts.push({ type, content });
    await society.save();

    res.status(201).json({ message: 'Post added', posts: society.posts });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getAllSocieties,
  getSocietyById,
  addPostToSociety,
};
