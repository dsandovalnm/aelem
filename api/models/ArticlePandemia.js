const con = require('../includes/db_connect');

class ArticlePandemia {
	add() {

	}

	edit() {

	}

	delete() {

	}

	getAll() {
		return new Promise((resolve, reject) => {
			let sql = 'SELECT articulos_cuarentena.id AS id_articulo, articulos_cuarentena.codigo, articulos_cuarentena.titulo AS titulo_articulo, articulos_cuarentena.sub_titulo, articulos_cuarentena.descripcion AS articulo_descripcion, articulos_cuarentena.contenido, articulos_cuarentena.imagen AS imagen_articulo, articulos_cuarentena.profesional, profesionales.id AS id_profesional, profesionales.nombre, profesionales.apellido, profesionales.profesion, profesionales.titulo AS titulo_profesional, profesionales.imagen AS imagen_profesional FROM articulos_cuarentena,profesionales WHERE articulos_cuarentena.profesional = profesionales.id';
			con.query(sql, (err, response) => {
				if(err) {
					reject(err);
				}

				resolve(response);
			});
		});
	}

	getLastN(amount) {
		return new Promise((resolve, reject) => {
			let sql = 'SELECT articulos_cuarentena.id AS id_articulo, articulos_cuarentena.codigo, articulos_cuarentena.titulo AS titulo_articulo, articulos_cuarentena.sub_titulo, articulos_cuarentena.descripcion AS articulo_descripcion, articulos_cuarentena.contenido, articulos_cuarentena.imagen AS imagen_articulo, articulos_cuarentena.profesional, profesionales.id AS id_profesional, profesionales.nombre, profesionales.apellido, profesionales.profesion, profesionales.titulo AS titulo_profesional, profesionales.imagen AS imagen_profesional FROM articulos_cuarentena,profesionales WHERE articulos_cuarentena.profesional = profesionales.id ORDER BY articulos_cuarentena.id DESC LIMIT ?';
			con.query(sql, amount, (err, response) => {
				if(err) {
					reject(err);
				}

				resolve(response);
			});
		});
	}
}

module.exports = ArticlePandemia;