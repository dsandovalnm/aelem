const express = require('express');
const router = express.Router();
const ProfesionalesController = require('../controllers/profesionalesController');

router.get('/', ProfesionalesController.getAll);

module.exports = router;