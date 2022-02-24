const { resolveObjectURL } = require('buffer');
const con = require('../includes/db_connect');

class Precio {

	codigo_seminario = 0;
	tipo = '';
	valor = 0;
	descripcion = '';

	add() {

	}

	edit() {

	}

	delete() {

	}

	getAll() {
		return new Promise((resolve, reject) => {
			let sql = 'SELECT precios.id AS id_precio, precios.codigo_seminario, precios.tipo, precios.valor, precios.descripcion AS descripcion_precio, cursos_seminarios.nombre AS nombre_seminario, cursos_seminarios.imagen FROM precios, cursos_seminarios WHERE precios.codigo_seminario = cursos_seminarios.codigo';
			con.query(sql, (err, response) => {
				if(err) {
					reject(err);
				}

				resolve(response);
			});
		});
	}

	getBySeminario() {
		return new Promise((resolve, reject) => {
			let sql = 'SELECT precios.id AS id_precio, precios.codigo_seminario, precios.tipo, precios.valor, precios.descripcion AS descripcion_precio, cursos_seminarios.nombre AS nombre_seminario, cursos_seminarios.imagen FROM precios, cursos_seminarios WHERE precios.codigo_seminario = cursos_seminarios.codigo AND precios.codigo_seminario = ?';
			con.query(sql, this.codigo_seminario, (err, response) => {
				if(err) {
					reject(err);
				}

				resolve(response);
			});
		});
	}
}

module.exports = Precio;