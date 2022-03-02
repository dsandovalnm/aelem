const SeminarioLive = require('../models/SeminarioLive');
let seminarioLive = new SeminarioLive();
let promiseRes;

exports.create = (req, res) => {

}

exports.edit = (req, res) => {

}

exports.delete = (req, res) => {

}

exports.getAll = (req, res) => {
	promiseRes = seminarioLive.getAll();

	promiseRes
		.then(response => {
			res.json({
				status: true,
				message: 'Get All Seminarios Live',
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

exports.getByCode = (req, res) => {
	seminarioLive.codigo = req.params.codigo;

	promiseRes = seminarioLive.getByCode();

	promiseRes
		.then(response => {
			res.json({
				status: true,
				message: 'Get Seminario Live By Code',
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