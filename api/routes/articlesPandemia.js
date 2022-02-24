const express = require('express');
const router = express.Router();
const ArticlesPandemiaController = require('../controllers/articlesPandemiaController');

router.get('/', require('../controllers/articlesPandemiaController').getAll);
router.get('/last/:amount', require('../controllers/articlesPandemiaController').getLastN);

module.exports = router;