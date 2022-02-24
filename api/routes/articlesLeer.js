const express = require('express');
const router = express.Router();
const ArticlesLeerController = require('../controllers/articlesLeerController');

router.get('/', ArticlesLeerController.getAll);
router.get('/:codigo', ArticlesLeerController.getByCode);

module.exports = router;