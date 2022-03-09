const express = require('express');
const router = express.Router();
const SeminarioLiveController = require('../controllers/seminariosLiveController');

router.get('/', SeminarioLiveController.getAll);
router.get('/temas', SeminarioLiveController.getAllTemas);
router.get('/temas/:codigo', SeminarioLiveController.getTemasByCodigo);

module.exports = router;