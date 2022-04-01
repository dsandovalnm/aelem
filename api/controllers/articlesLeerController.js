const ArticleLeer = require('../models/ArticleLeer');
let articleLeer = new ArticleLeer();
let promiseRes;

exports.create = (req, res) => {
	
}

exports.edit = (req, res) => {

}

exports.delete = (req, res) => {

}

exports.getByCode = (req, res) => {
	articleLeer.codigo = req.params.codigo;

	promiseRes = articleLeer.getByCode();

	promiseRes
		.then(response => {
			res.json({
				status: true,
				message: 'Get By Code Article Leer',
				response
			});
		})
		.catch(error => {
			res.json({
				status: false,
				message: 'Hubo un error en la consulta',
				error
			});
		});
}

exports.getAll = (req, res) => {
	promiseRes = articleLeer.getAll();

	promiseRes
		.then(response => {
			res.json({
				status: true,
				message: 'Get All Articulos Leer',
				response
			});
		})
		.catch(error => {
			res.json({
				status: false,
				message: 'Hubo un error en la consulta',
				error
			});
		});
}

exports.getBytitle = (req, res) => {
	articleLeer.titulo = req.params.titulo;

	promiseRes = articleLeer.getByTitle();

	promiseRes
		.then(response => {
			res.json({
				status: true,
				message: 'Get Articles by Titulo',
				response
			});
		})
		.catch(error => {
			res.json({
				status: true,
				message: 'Hubo un error en la consulta',
				error
			});
		});
}