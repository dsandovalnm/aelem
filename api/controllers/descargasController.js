const Descarga = require('../models/Descarga');
let descarga = new Descarga();
let promiseRes;

exports.create = (req, res) => {

}

exports.edit = (req, res) => {

}

exports.delete = (req, res) => {

}

exports.getAll = (req, res) => {
	promiseRes = descarga.getall();

	promiseRes
		.then(response => {
			res.json({
				status: true,
				message: 'Get All Descargas',
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

exports.getByCategory = (req, res) => {
	descarga.categoria = req.params.codigo;

	promiseRes = descarga.getByCategory();

	promiseRes
		.then(response => {
			res.json({
				status: true,
				message: 'Get Descargas By Categoria',
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