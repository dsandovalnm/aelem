const con = require('../includes/db_connect');

class ClaseAbierta {

	id = 0;
	titulo = '';
	descripcion = '';
	imagen = '';
	video = '';

	add() {
		return new Promise((resolve, reject) => {
			let sql = 'INSERT INTO charlas_abiertas (titulo, descripcion, imagen, video) VALUES (?, ?, ?, ?,)';
			con.query(sql, [this.titulo, this.descripcion, this.imagen, this.video], (err, response) => {
				if(err) {
					reject(err);
				}

				resolve(response);
			});
		});
	}

	edit() {

	}

	delete() {

	}

	getAll() {
		return new Promise((resolve, reject) => {
			let sql = 'SELECT * FROM charlas_abiertas';
			con.query(sql, (err, response) => {
				if(err) {
					reject(err);
				}

				resolve(response);
			});
		});
	}
}

module.exports = ClaseAbierta;