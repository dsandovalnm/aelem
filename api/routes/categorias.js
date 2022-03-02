const express = require('express');
const router = express.Router();
const categoriasController = require('../controllers/categoriasController');

router.get('/', categoriasController.getAll);
router.get('/:categoria', categoriasController.getByName);

module.exports = router;