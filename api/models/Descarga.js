const con = require('../includes/db_connect');

class Descarga {

	id = 0;
	codigo = 0;
	nombre = '';
	descripcion = '';
	pago = 0;
	visible = 0;
	categoria = 0;
	imagen = '';
	ruta = '';
	precio_arg = 0;
	precio_ext = 0;

	add() {

	}

	edit() {

	}

	delete() {

	}

	getall() {
		return new Promise((resolve, reject) => {
			let sql = 'SELECT contenido_descarga.*, contenido_descarga.id AS id_descarga, contenido_descarga.codigo AS contenido_descarga, contenido_descarga.nombre AS nombre_descarga, categoria_descargas.id AS id_categoria, categoria_descargas.codigo AS codigo_categoria, categoria_descargas.nombre AS nombre_categoria, categoria_descargas.texto AS texto_categoria, categoria_descargas.icono AS icono_categoria FROM contenido_descarga, categoria_descargas WHERE contenido_descarga.categoria = categoria_descargas.codigo';
			con.query(sql, (err, response) => {
				if(err) {
					reject(err);
				}

				resolve(response);
			});
		});
	}
	
	getByCategory() {
		return new Promise((resolve, reject) => {
			let sql = 'SELECT contenido_descarga.*, contenido_descarga.id AS id_descarga, contenido_descarga.codigo AS contenido_descarga, contenido_descarga.nombre AS nombre_descarga, categoria_descargas.id AS id_categoria, categoria_descargas.codigo AS codigo_categoria, categoria_descargas.nombre AS nombre_categoria, categoria_descargas.texto AS texto_categoria, categoria_descargas.icono AS icono_categoria FROM contenido_descarga, categoria_descargas WHERE contenido_descarga.categoria = categoria_descargas.codigo AND contenido_descarga.categoria = ?';
			con.query(sql, this.categoria, (err, response) => {
				if(err) {
					reject(err);
				}

				resolve(response);
			});
		});
	}
}

module.exports = Descarga;