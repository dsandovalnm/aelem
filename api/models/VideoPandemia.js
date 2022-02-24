const con = require('../includes/db_connect');

class VideoPandemia {
	add() {

	}

	edit() {

	}

	delete() {

	}

	getAll() {
		return new Promise((resolve, reject) => {
			let sql = 'SELECT * FROM videos_cuarentena';
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
			let sql = 'SELECT * FROM videos_cuarentena ORDER BY id DESC LIMIT ?';
			con.query(sql, amount, (err, response) => {
				if(err) {
					reject(err);
				}

				resolve(response);
			});
		});
	}
}

module.exports = VideoPandemia;