// backend/routes/societyRoutes.js

const express = require('express');
const { getAllSocieties, getSocietyById, addPostToSociety } = require('../controllers/societyController.js');
const { protect } = require('../middlewares/authMiddleware.js');

const router = express.Router();

router.get('/', getAllSocieties);
router.get('/:id', getSocietyById);

router.post('/posts', protect('society'), addPostToSociety);

module.exports = router;
