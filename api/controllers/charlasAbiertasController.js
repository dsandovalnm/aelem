const CharlaAbierta = require('../models/CharlaAbierta');

let charlaAbierta = new CharlaAbierta();
let promiseRes;

exports.create = (req, res) => {
	
}
exports.edit = (req, res) => {

}
exports.delete = (req, res) => {

}

exports.getAll = (req, res) => {

	promiseRes = charlaAbierta.getAll();

	promiseRes
		.then(response => {
			res.json({
				'status' : true,
				'message' : 'Get All Charlas Abiertas',
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