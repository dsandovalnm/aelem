const con = require('../includes/db_connect');

class CursoSeminario {
	add() {

	}

	edit() {

	}

	delete() {

	}

	getAll() {
		return new Promise((resolve, reject) => {
			let sql = 'SELECT cursos_seminarios.id AS id_curso_seminario, cursos_seminarios.codigo, cursos_seminarios.nombre AS nombre_curso_seminario, cursos_seminarios.tipo, cursos_seminarios.descripcion AS descripcion_curso_seminario, cursos_seminarios.modalidad, cursos_seminarios.premium, cursos_seminarios.imagen AS imagen_curso_seminario, cursos_seminarios.clases, cursos_seminarios.profesional, cursos_seminarios.visible AS visible_curso_seminario, profesionales.id AS id_profesional, profesionales.nombre AS nombre_profesional, profesionales.apellido AS apellido_profesional, profesionales.profesion, profesionales.titulo AS titulo_profesional, profesionales.imagen AS imagen_profesional FROM cursos_seminarios, profesionales WHERE cursos_seminarios.profesional = profesionales.id';

			con.query(sql, (err, response) => {
				if(err) {
					reject(err);
				}

				resolve(response);
			});
		});
	}

	getCursos() {
		return new Promise((resolve, reject) => {
			let sql = 'SELECT cursos_seminarios.id AS id_curso_seminario, cursos_seminarios.codigo, cursos_seminarios.nombre AS nombre_curso_seminario, cursos_seminarios.tipo, cursos_seminarios.descripcion AS descripcion_curso_seminario, cursos_seminarios.modalidad, cursos_seminarios.premium, cursos_seminarios.imagen AS imagen_curso_seminario, cursos_seminarios.clases, cursos_seminarios.profesional, cursos_seminarios.visible AS visible_curso_seminario, profesionales.id AS id_profesional, profesionales.nombre AS nombre_profesional, profesionales.apellido AS apellido_profesional, profesionales.profesion, profesionales.titulo AS titulo_profesional, profesionales.imagen AS imagen_profesional FROM cursos_seminarios, profesionales WHERE cursos_seminarios.profesional = profesionales.id AND cursos_seminarios.tipo = 100';

			con.query(sql, (err, response) => {
				if(err) {
					reject(err);
				}

				resolve(response);
			});
		});
	}

	getSeminarios() {
		return new Promise((resolve, reject) => {
			let sql = 'SELECT cursos_seminarios.id AS id_curso_seminario, cursos_seminarios.codigo, cursos_seminarios.nombre AS nombre_curso_seminario, cursos_seminarios.tipo, cursos_seminarios.descripcion AS descripcion_curso_seminario, cursos_seminarios.modalidad, cursos_seminarios.premium, cursos_seminarios.imagen AS imagen_curso_seminario, cursos_seminarios.clases, cursos_seminarios.profesional, cursos_seminarios.visible AS visible_curso_seminario, profesionales.id AS id_profesional, profesionales.nombre AS nombre_profesional, profesionales.apellido AS apellido_profesional, profesionales.profesion, profesionales.titulo AS titulo_profesional, profesionales.imagen AS imagen_profesional FROM cursos_seminarios, profesionales WHERE cursos_seminarios.profesional = profesionales.id AND cursos_seminarios.tipo = 101';

			con.query(sql, (err, response) => {
				if(err) {
					reject(err);
				}

				resolve(response);
			});
		});
	}

	
}

module.exports = CursoSeminario;