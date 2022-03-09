const { CONNREFUSED } = require('dns');
const con = require('../includes/db_connect');

class SeminarioLive {

	id = 0;
	codigo = 0;
	codigo_externo = 0;
	nombre = '';
	descripcion = '';
	cupos = 0;
	grupo_actual = 0;
	duracion = '';
	modalidad = '';
	material_adicional = 0;
	texto_descriptivo_1 = '';
	texto_descriptivo_2 = '';
	imagen = '';
	video_intro = '';
	profesional = 0;
	visible = 0;
	tema = '';

	add() {

	}

	edit() {

	}

	delete() {

	}

	getAll() {
		return new Promise((resolve, reject) => {
			let sql = 'SELECT * FROM seminarios_live';
			con.query(sql, (err, response) => {
				if(err) {
					reject(err);
				}

				resolve(response);
			});
		});
	}

	getByCode() {
		return new Promise((resolve, reject) => {
			let sql = 'SELECT * FROM seminarios_live WHERE codigo = ?';
			con.query(sql, this.codigo, (err, response) => {
				if(err) {
					reject(err);
				}

				resolve(response);
			});
		});
	}

	addTema() {

	}

	editTema() {

	}

	getAllTemas() {
		return new Promise((resolve, reject) => {
			let sql = 'SELECT * FROM temas_seminarios_live';
			con.query(sql, (err, response) => {
				if(err) {
					reject(err);
				}

				resolve(response);
			})
		});
	}

	getTemasByCodigo() {
		return new Promise((resolve, reject) => {
			let sql = 'SELECT * FROM temas_seminarios_live WHERE seminario_codigo = ?';
			con.query(sql, this.codigo, (err, response) => {
				if(err) {
					reject(err);
				}

				resolve(response);
			});
		});
	}
}

module.exports = SeminarioLive;