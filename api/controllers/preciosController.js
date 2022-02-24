const Precio = require('../models/Precio');
let precio = new Precio();
let promiseRes;

exports.create = (req, res) => {
	
}

exports.edit = (req, res) => {

}

exports.delete = (req, res) => {

}

exports.getAll = (req, res) => {
	promiseRes = precio.getAll();

	promiseRes
		.then(response => {
			res.json({
				status: true,
				message: 'Get All Prices',
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

exports.getBySeminario = (req, res) => {
	precio.codigo_seminario = req.params.codigo
	promiseRes = precio.getBySeminario();

	promiseRes
		.then(response => {
			res.json({
				status: true,
				message: 'Get Prices By Seminario',
				response
			});
		})
		.catch(error => {
			res.json({
				status: false,
				message: 'Hubo un error en la consulta',
				error
			});
		})
}