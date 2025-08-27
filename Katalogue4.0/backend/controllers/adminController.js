// backend/controllers/adminController.js

const Society = require('../models/Society.js');

const getPendingSocieties = async (req, res) => {
  try {
    const societies = await Society.find({ approved: false });
    res.json(societies);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const approveSociety = async (req, res) => {
  try {
    const { id } = req.params;
    const society = await Society.findById(id);
    if (!society) return res.status(404).json({ message: 'Society not found' });

    society.approved = true;
    await society.save();

    res.json({ message: 'Society approved' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getPendingSocieties,
  approveSociety,
};
