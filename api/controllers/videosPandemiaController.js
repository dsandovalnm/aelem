const VideoPandemia = require('../models/VideoPandemia');

let videopandemia = new VideoPandemia();
let promiseRes;

exports.create = (req, res) => {

}

exports.edit =  (req, res) => {

}

exports.delete = (req, res) => {

}

exports.getAll = (req, res) => {
	promiseRes = videopandemia.getAll();

	promiseRes
		.then(response => {
			res.json({
				'status' : true,
				'message' : 'Get All Videos Pandemia',
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

exports.getLastN = (req, res) => {
	let amount = req.params.amount;

	promiseRes = videopandemia.getLastN(parseInt(amount));

	promiseRes
		.then(response => {
			res.json({
				'status' : true,
				'message' : 'Get Last '+amount+' Videos Pandemia',
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