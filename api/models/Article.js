const con = require('../includes/db_connect');

class Article {

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
			let sql = 'SELECT articulos.id AS id_articulo, articulos.codigo, articulos.titulo AS titulo_articulo, articulos.sub_titulo, articulos.descripcion AS articulo_descripcion, articulos.contenido, articulos.imagen AS imagen_articulo, articulos.profesional, profesionales.id AS id_profesional, profesionales.nombre, profesionales.apellido, profesionales.profesion, profesionales.titulo AS titulo_profesional, profesionales.imagen AS imagen_profesional FROM articulos,profesionales WHERE articulos.profesional = profesionales.id ORDER BY articulos.id DESC';
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
			let sql = 'SELECT articulos.id AS id_articulo, articulos.codigo, articulos.titulo AS titulo_articulo, articulos.sub_titulo, articulos.descripcion AS articulo_descripcion, articulos.contenido, articulos.imagen AS imagen_articulo, articulos.profesional, profesionales.id AS id_profesional, profesionales.nombre, profesionales.apellido, profesionales.profesion, profesionales.titulo AS titulo_profesional, profesionales.imagen AS imagen_profesional FROM articulos,profesionales WHERE articulos.profesional = profesionales.id ORDER BY articulos.id DESC LIMIT ?';
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
			let sql = 'SELECT articulos.id AS id_articulo, articulos.codigo, articulos.titulo AS titulo_articulo, articulos.sub_titulo, articulos.descripcion AS articulo_descripcion, articulos.contenido, articulos.imagen AS imagen_articulo, articulos.profesional, profesionales.id AS id_profesional, profesionales.nombre, profesionales.apellido, profesionales.profesion, profesionales.titulo AS titulo_profesional, profesionales.descripcion AS profesional_descripcion, profesionales.imagen AS imagen_profesional FROM articulos,profesionales WHERE articulos.profesional = profesionales.id AND articulos.codigo = ?';
			con.query(sql, this.codigo, (err, response) => {
				if(err) {
					reject(err);
				}

				resolve(response);
			});
		});
	}
}

module.exports = Article;