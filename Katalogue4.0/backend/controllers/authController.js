// backend/controllers/authController.js

const Society = require('../models/Society.js');
const Student = require('../models/Student.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const loginSocietyHead = async (req, res) => {
  const { name, password } = req.body;
  try {
    const society = await Society.findOne({ name, approved: true });
    if (!society) return res.status(400).json({ message: 'Society not found or not approved' });

    const isMatch = await bcrypt.compare(password, society.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid password' });

    const token = jwt.sign({ id: society._id, role: 'society' }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, societyName: society.name });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const loginStudent = async (req, res) => {
  const { username } = req.body;
  try {
    const student = await Student.findOne({ username });
    if (!student) return res.status(400).json({ message: 'Student not found' });

    const token = jwt.sign({ id: student._id, role: 'student' }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, username: student.username });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  loginSocietyHead,
  loginStudent,
};
