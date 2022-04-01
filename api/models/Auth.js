const con = require('../includes/db_connect');
const bcrypt = require('bcryptjs');

class Auth {
	constructor(username, password) {
		this.username = username;
		this.password = password;
	}

	login() {
		return new Promise((resolve, reject) => {
			let passwordHsh = '';
			let sql = 'SELECT * FROM usuarios WHERE username = ?';
			con.query(sql, this.username, (err, response) => {
				if(err) {
					reject(err);
				}

				
				
			});
		});
	}
}