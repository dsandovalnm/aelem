const express = require('express');
const router = express.Router();
const ArticlesController = require('../controllers/articlesController');

router.get('/', require('../controllers/articlesController').getAll);
router.get('/last/:amount', require('../controllers/articlesController').getLastN);
router.get('/:code', require('../controllers/articlesController').getByCode);

module.exports = router;