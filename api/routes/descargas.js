const express = require('express');
const router = express.Router();
const descargasController = require('../controllers/descargasController');

router.post('/create', descargasController.create);
router.post('/addDownload', descargasController.addDownload);

router.get('/', descargasController.getAll);
router.get('/categoria/:codigo', descargasController.getByCategory);
router.get('/downloads/:nombre', descargasController.getDownloadsByName);
router.get('/:codigo', descargasController.getByCode);

module.exports = router;