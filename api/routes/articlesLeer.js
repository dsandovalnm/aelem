const express = require('express');
const router = express.Router();
const articlesLeerController = require('../controllers/articlesLeerController');

router.get('/', articlesLeerController.getAll);
router.get('/:codigo', articlesLeerController.getByCode);
router.get('/titulo/:titulo', articlesLeerController.getBytitle);

module.exports = router;