const express = require('express');
const router = express.Router();
const VideosPandemiaController = require('../controllers/videosPandemiaController');

router.get('/', VideosPandemiaController.getAll);
router.get('/last/:amount', VideosPandemiaController.getLastN);

module.exports = router;