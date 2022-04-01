const mysql = require('mysql2');

let db = mysql.createPool({
	host: '72.167.53.65',
	user: 'aelemadmindb',
	password: 'Xo!QJ0yzc6jt3&f',
	database: 'aelemadmindb'
});

db.getConnection((err, con) => {
	if(err) {
		console.log(err);
	}

	if (con) {
		con.release();
		console.log('DB Connected');
	} 
});

module.exports = db;