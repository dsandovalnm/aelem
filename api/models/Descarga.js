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

	download_nombre = '';
	download_apellido = '';
	download_email = '';
	download_pais = '';
	download_telefono = '';
	download_nombre_descarga = '';
	download_categoria = 0;


	add() {
		return new Promise((resolve, reject) => {
			let sql = 'INSERT INTO descargas_material (codigo, nombre, descripcion, pago, visible, categoria, imagen, ruta, precio_arg, precio_ext) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
			con.query(sql, [this.codigo, this.nombre, this.descripcion, this.pago, this.visible, this.categoria, this.imagen, this.ruta, this.precio_arg, this.precio_ext], (err, response) => {
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

	getall() {
		return new Promise((resolve, reject) => {
			let sql = 'SELECT descargas_material.*, descargas_material.id AS id_descarga, descargas_material.codigo AS codigo_descarga, descargas_material.nombre AS nombre_descarga, descargas_categorias.id AS id_categoria, descargas_categorias.codigo AS codigo_categoria, descargas_categorias.nombre AS nombre_categoria, descargas_categorias.texto AS texto_categoria, descargas_categorias.icono AS icono_categoria FROM descargas_material, descargas_categorias WHERE descargas_material.categoria = descargas_categorias.codigo';
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
			let sql = 'SELECT descargas_material.*, descargas_material.id AS id_descarga, descargas_material.codigo AS codigo_descarga, descargas_material.nombre AS nombre_descarga, descargas_categorias.id AS id_categoria, descargas_categorias.codigo AS codigo_categoria, descargas_categorias.nombre AS nombre_categoria, descargas_categorias.texto AS texto_categoria, descargas_categorias.icono AS icono_categoria FROM descargas_material, descargas_categorias WHERE descargas_material.categoria = descargas_categorias.codigo AND descargas_material.categoria = ?';
			con.query(sql, this.categoria, (err, response) => {
				if(err) {
					reject(err);
				}

				resolve(response);
			});
		});
	}

	getByCode() {
		return new Promise((resolve, reject) => {
			let sql = 'SELECT descargas_material.*, descargas_material.id AS id_descarga, descargas_material.codigo AS codigo_descarga, descargas_material.nombre AS nombre_descarga, descargas_categorias.id AS id_categoria, descargas_categorias.codigo AS codigo_categoria, descargas_categorias.nombre AS nombre_categoria, descargas_categorias.texto AS texto_categoria, descargas_categorias.icono AS icono_categoria FROM descargas_material, descargas_categorias WHERE descargas_material.categoria = descargas_categorias.codigo AND descargas_material.codigo = ?';
			con.query(sql, this.codigo, (err, response) => {
				if(err) {
					reject(err);
				}

				resolve(response);
			});
		});
	}

	addDownload() {
		return new Promise((resolve, reject) => {
			let sql = 'INSERT INTO descargas (nombre, apellido, email, pais, numero_telefono, nombre_descarga, categoria) VALUES (?, ?, ?, ?, ?, ?, ?)';
			con.query(sql, [this.download_nombre, this.download_apellido, this.download_email, this.download_pais, this.download_telefono, this.download_nombre_descarga, this.download_categoria], (err, response) => {
				if(err) {
					reject(err);
				}

				resolve(response);
			});
		});
	}

	getDownloadsByName() {
		return new Promise((resolve, reject) => {
			let sql = 'SELECT * FROM descargas WHERE nombre_descarga LIKE ?';
			con.query(sql, `${this.nombre}%`, (err, response) => {
				if(err) {
					reject(err);
				}

				resolve(response);
			});
		});
	}
}

module.exports = Descarga;