const Profesional = require('../models/Profesional');
let profesional = new Profesional();
let promiseRes;

exports.create = (req, res) => {

}

exports.edit = (req, res) => {

}

exports.delete = (req, res) => {

}

exports.getAll = (req, res) => {
	promiseRes = profesional.getAll();

	promiseRes
		.then(response => {
			res.json({
				status: true,
				message: 'Get All Profesionales',
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