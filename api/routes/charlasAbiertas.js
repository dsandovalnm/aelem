const express = require('express');
const router = express.Router();
const charlasAbiertasController = require('../controllers/charlasAbiertasController');

router.get('/', charlasAbiertasController.getAll);

module.exports = router;