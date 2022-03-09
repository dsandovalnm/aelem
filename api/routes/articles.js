const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articlesController');

router.get('/', articlesController.getAll);
router.get('/:code', articlesController.getByCode);
router.get('/titulo/:titulo', articlesController.getByTitle);
router.get('/profesional/:profesionalId', articlesController.getByProfesionalId);
router.get('/titulo_profesional/:titulo/:profesionalId', articlesController.getByTitleProf);
router.get('/last/:amount', articlesController.getLastN);

module.exports = router;