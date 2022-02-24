const con = require('../includes/db_connect');

class Profesional {
	add() {

	}

	edit() {
		
	}

	delete() {

	}

	getAll() {
		return new Promise((resolve, reject) => {
			let sql = 'SELECT * FROM profesionales';
			con.query(sql, (err, response) => {
				if(err) {
					reject(err);
				}

				resolve(response);
			});
		});
	}
}

module.exports = Profesional;