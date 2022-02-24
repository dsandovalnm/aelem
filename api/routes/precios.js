const express = require('express');
const router = express.Router();
const PreciosController = require('../controllers/preciosController');

router.get('/', PreciosController.getAll);
router.get('/seminario/:codigo', PreciosController.getBySeminario);

module.exports = router;