// backend/routes/authRoutes.js

const express = require('express');
const { loginSocietyHead, loginStudent } = require('../controllers/authController.js');

const router = express.Router();

router.post('/login-society', loginSocietyHead);
router.post('/login-student', loginStudent);

module.exports = router;
