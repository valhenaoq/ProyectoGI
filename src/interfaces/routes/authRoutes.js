const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

// Ruta POST para iniciar sesión
// URL final: /api/auth/login
router.post('/login', AuthController.login);

module.exports = router;