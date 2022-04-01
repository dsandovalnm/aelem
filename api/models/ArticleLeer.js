const con = require('../includes/db_connect');

class ArticleLeer {

	id = 0;
	codigo = 0;
	titulo = '';
	autor = '';
	anio = '';
	institucion = '';
	descripcion = '';
	contenido = '';
	imagen = '';
	imagen_preview = '';

	add() {

	}

	edit() {

	}

	delete() {

	}

	getByCode() {
		return new Promise((resolve, reject) => {
			let sql = 'SELECT *, año as anio FROM articulos_leer WHERE codigo = ?';
			con.query(sql, this.codigo, (err, response) => {
				if(err) {
					reject(err);
				}

				resolve(response);
			});
		});
	}

	getAll() {
		return new Promise((resolve, reject) => {
			let sql = 'SELECT *, año as anio FROM articulos_leer';
			con.query(sql, (err, response) => {
				if(err) {
					reject(err);
				}

				resolve(response);
			});
		});
	}

	getByTitle() {
		return new Promise((resolve, reject) => {
			let sql = 'SELECT *, año as anio FROM articulos_leer WHERE titulo LIKE ?';
			con.query(sql, [`%${this.titulo}%`], (err, response) => {
				if(err) {
					reject(err);
				}

				resolve(response);
			});
		});
	}
}

module.exports = ArticleLeer;