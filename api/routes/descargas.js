const express = require('express');
const router = express.Router();
const descargasController = require('../controllers/descargasController');

router.get('/', descargasController.getAll);
router.get('/categoria/:codigo', descargasController.getByCategory);

module.exports = router;