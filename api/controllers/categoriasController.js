const Categoria = require('../models/Categoria');
let categoria = new Categoria();
let promiseRes;

exports.create = (req, res) => {

}

exports.edit = (req, res) => {

}

exports.delete = (req, res) => {

}

exports.getAll = (req, res) => {
	promiseRes = categoria.getAll();
	
	promiseRes
		.then(response => {
			res.json({
				status: true,
				message: 'Get All Categorias',
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

exports.getByName = (req, res) => {
	categoria.nombre = req.params.categoria;

	promiseRes = categoria.getByName();

	promiseRes
		.then(response => {
			res.json({
				status: true,
				message: 'Get Categorias By Nombre',
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

