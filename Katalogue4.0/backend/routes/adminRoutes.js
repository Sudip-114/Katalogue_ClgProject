// backend/routes/adminRoutes.js

const express = require('express');
const { getPendingSocieties, approveSociety } = require('../controllers/adminController.js');
const { protect } = require('../middlewares/authMiddleware.js');

const router = express.Router();

router.get('/pending', protect('admin'), getPendingSocieties);
router.put('/approve/:id', protect('admin'), approveSociety);

module.exports = router;
