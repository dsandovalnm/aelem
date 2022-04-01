const express = require('express');
const router = express.Router();
const categoriasDescargasController = require('../controllers/categoriasDescargasController');

router.get('/', categoriasDescargasController.getAll);
router.get('/:categoria', categoriasDescargasController.getByName);

module.exports = router;