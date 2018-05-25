/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <HakunaMacouta> wrote this file.  As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return.   Thomas Blanc
 * ----------------------------------------------------------------------------
 */
const dbFile = './movies.db';
const sqlite = require('sqlite3').verbose();

let db = new sqlite.Database(dbFile, (err) => {
	if(err) {
		console.error(err.message);
	}
	console.log('Connected to the movies database.');
});

exports.all = function(req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	let movies = [];
	db.all("SELECT * FROM movie", [], (err, rows) => {
		if (err) {
			throw err;
		}
		res.send(rows);
	});
};

exports.view = function(req, res) {
	res.send('view')
};

exports.add = function(req, res) {
	console.log("add");
	res.send('add')
};

exports.update = function(req, res) {
	res.send('update')
};




