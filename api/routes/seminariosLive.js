const express = require('express');
const router = express.Router();
const SeminarioLiveController = require('../controllers/seminariosLiveController');

router.get('/', SeminarioLiveController.getAll);
router.get('/:codigo', SeminarioLiveController.getByCode);

module.exports = router;