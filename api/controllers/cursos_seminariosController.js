const CursoSeminario = require('../models/CursoSeminario');
const curso_seminario = new CursoSeminario();

let promiseRes;

exports.create = (req, res) => {
	
}

exports.edit = (req, res) => {

}

exports.delete = (req, res) => {

}

exports.getAll = (req, res) => {
	promiseRes = curso_seminario.getAll();

	promiseRes
		.then(response => {
			res.json({
				'status' : true,
				'message' : 'Get All Cursos Seminarios',
				response
			});
		})
		.catch(error => {
			res.json({
				'status' : false,
				'message' : 'Hubo un error en la consulta',
				error
			});
		});
		
}

exports.getCursos = (req, res) => {
	promiseRes = curso_seminario.getCursos();

	promiseRes
		.then(response => {
			res.json({
				'status' : true,
				'message' : 'Get All Cursos',
				response
			});
		})
		.catch(error => {
			res.json({
				'status' : false,
				'message' : 'Hubo un error en la consulta',
				error
			});
		});
}

exports.getSeminarios = (req, res) => {
	promiseRes = curso_seminario.getSeminarios();

	promiseRes
		.then(response => {
			res.json({
				'status' : true,
				'message' : 'Get All Seminarios',
				response
			});
		})
		.catch(error => {
			res.json({
				'status' : false,
				'message' : 'Hubo un error en la consulta',
				error
			});
		});
}