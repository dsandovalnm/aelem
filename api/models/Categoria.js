const con = require('../includes/db_connect');

class Categoria {

	id = 0;
	codigo = 0;
	visible = 0;
	nombre = '';
	texto = '';
	icono = '';

	add() {

	}

	edit() {
		
	}

	delete() {

	}

	getAll() {
		return new Promise((resolve, reject) => {
			let sql = 'SELECT * FROM categoria_descargas';
			con.query(sql, (err, response) => {
				if(err) {
					reject(err);
				}

				resolve(response);
			});
		});
	}

	getByName() {
		return new Promise((resolve, reject) => {
			let sql = 'SELECT * FROM categoria_descargas WHERE nombre = ?';
			con.query(sql, this.nombre, (err, response) => {
				if(err) {
					reject(err);
				}

				resolve(response);
			});
		});
	}
}

module.exports = Categoria;