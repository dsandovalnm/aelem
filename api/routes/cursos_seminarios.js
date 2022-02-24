const express = require('express');
const router = express.Router();
const CursosSeminariosController = require('../controllers/cursos_seminariosController');

router.get('/', CursosSeminariosController.getAll);
router.get('/cursos', CursosSeminariosController.getCursos);
router.get('/seminarios', CursosSeminariosController.getSeminarios);

module.exports = router;