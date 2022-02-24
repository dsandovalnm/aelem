const Article = require('../models/Article');

let article = new Article();
let promiseRes;

exports.create = (req, res) => {
	
}

exports.edit = (req, res) => {

}

exports.delete = (req, res) => {

}

exports.getAll = (req, res) => {
	promiseRes = article.getAll();

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

	promiseRes = article.getLastN(parseInt(amount));

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

exports.getByCode = (req, res) => {
	let codigo = req.params.code;

	article.codigo = codigo;
	promiseRes = article.getByCode();

	promiseRes
		.then(response => {
			res.json({
				status: true,
				message: 'Get Article by Code',
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