const ArticlePandemia = require('../models/ArticlePandemia');

let articlePandemia = new ArticlePandemia();
let promiseRes;

exports.create = (req, res) => {
	
}

exports.edit = (req, res) => {

}

exports.delete = (req, res) => {

}

exports.getAll = (req, res) => {
	promiseRes = articlePandemia.getAll();

	promiseRes
		.then(response => {
			res.json({
				'status' : true,
				'message' : 'Get All Articles',
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

	promiseRes = articlePandemia.getLastN(parseInt(amount));

	promiseRes
		.then(response => {
			res.json({
				'status' : true,
				'message' : 'Get Last '+amount+' Articles',
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