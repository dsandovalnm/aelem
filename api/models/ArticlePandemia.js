const con = require('../includes/db_connect');

class ArticlePandemia {

	id = 0;
	codigo = 0;
	titulo = '';
	sub_titulo = '';
	descripcion = '';
	contenido = '';
	imagen = '';
	profesional = 0;

	add() {

	}

	edit() {

	}

	delete() {

	}

	getAll() {
		return new Promise((resolve, reject) => {
			let sql = 'SELECT cuarentena_articulos.id AS id_articulo, cuarentena_articulos.codigo, cuarentena_articulos.titulo AS titulo_articulo, cuarentena_articulos.sub_titulo, cuarentena_articulos.descripcion AS articulo_descripcion, cuarentena_articulos.contenido, cuarentena_articulos.imagen AS imagen_articulo, cuarentena_articulos.profesional, profesionales.id AS id_profesional, profesionales.nombre, profesionales.apellido, profesionales.profesion, profesionales.titulo AS titulo_profesional, profesionales.imagen AS imagen_profesional FROM cuarentena_articulos,profesionales WHERE cuarentena_articulos.profesional = profesionales.id';
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
			let sql = 'SELECT cuarentena_articulos.id AS id_articulo, cuarentena_articulos.codigo, cuarentena_articulos.titulo AS titulo_articulo, cuarentena_articulos.sub_titulo, cuarentena_articulos.descripcion AS articulo_descripcion, cuarentena_articulos.contenido, cuarentena_articulos.imagen AS imagen_articulo, cuarentena_articulos.profesional, profesionales.id AS id_profesional, profesionales.nombre, profesionales.apellido, profesionales.profesion, profesionales.titulo AS titulo_profesional, profesionales.imagen AS imagen_profesional FROM cuarentena_articulos,profesionales WHERE cuarentena_articulos.profesional = profesionales.id ORDER BY cuarentena_articulos.id DESC LIMIT ?';
			con.query(sql, amount, (err, response) => {
				if(err) {
					reject(err);
				}

				resolve(response);
			});
		});
	}

	getByCode() {
		return new Promise((resolve, reject) => {
			let sql = 'SELECT cuarentena_articulos.id AS id_articulo, cuarentena_articulos.codigo, cuarentena_articulos.titulo AS titulo_articulo, cuarentena_articulos.sub_titulo, cuarentena_articulos.descripcion AS articulo_descripcion, cuarentena_articulos.contenido, cuarentena_articulos.imagen AS imagen_articulo, cuarentena_articulos.profesional, profesionales.id AS id_profesional, profesionales.nombre, profesionales.apellido, profesionales.profesion, profesionales.titulo AS titulo_profesional, profesionales.imagen AS imagen_profesional FROM cuarentena_articulos,profesionales WHERE cuarentena_articulos.profesional = profesionales.id AND codigo = ?';
			con.query(sql, this.codigo, (err, response) => {
				if(err) {
					reject(err);
				}

				resolve(response);
			});
		});
	}
}

module.exports = ArticlePandemia;