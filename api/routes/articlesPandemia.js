const express = require('express');
const router = express.Router();
const articlesPandemiaController = require('../controllers/articlesPandemiaController');

router.get('/', articlesPandemiaController.getAll);
router.get('/last/:amount', articlesPandemiaController.getLastN);
router.get('/:codigo', articlesPandemiaController.getByCode);

module.exports = router;