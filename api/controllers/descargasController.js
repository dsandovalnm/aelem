const Descarga = require('../models/Descarga');
let descarga = new Descarga();
let promiseRes;

exports.create = (req, res) => {
	descarga.codigo = req.body.codigo;
	descarga.nombre = req.body.nombre;
	descarga.descripcion = req.body.descripcion;
	descarga.pago = req.body.pago;
	descarga.visible = req.body.visible;
	descarga.categoria = req.body.categoria;
	descarga.imagen = req.body.imagen;
	descarga.ruta = req.body.ruta;
	descarga.precio_arg = req.body.precio_arg;
	descarga.precio_ext = req.body.precio_ext;

	console.log(req.body);
}

exports.addDownload = (req, res) => {
	descarga.download_nombre = req.body.nombre;
	descarga.download_apellido = req.body.apellido;
	descarga.download_pais = req.body.pais;
	descarga.download_telefono = req.body.numero_telefono;
	descarga.download_email = req.body.email;
	descarga.download_nombre_descarga = req.body.nombre_descarga;
	descarga.download_categoria = req.body.categoria;

	promiseRes = descarga.addDownload();

	promiseRes
		.then(response => {
			res.json({
				status: true,
				message: 'Add New Download',
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

exports.getByCode = (req, res) => {
	descarga.codigo = req.params.codigo;

	promiseRes = descarga.getByCode();

	promiseRes
		.then(response => {
			res.json({
				status: true,
				message: 'Get Descargas by Code',
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

exports.getDownloadsByName = (req, res) => {
	descarga.nombre = req.params.nombre;

	promiseRes = descarga.getDownloadsByName();

	promiseRes
		.then(response => {
			res.json({
				status: true,
				message: 'Get Downloads By Name',
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