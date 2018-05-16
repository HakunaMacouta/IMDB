/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <HakunaMacouta> wrote this file.  As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return.   Thomas Blanc
 * ----------------------------------------------------------------------------
 */
const dbFile = '.movies.db';
const sqlite = require('sqlite3').verbose();

let db = new sqlite.Database(dbFile, (err) => {
	if(err) {
		console.error(err.message);
	}
	console.log('Connected to the movies database.');
});

exports.list = function(req, res) {
	console.log("list");
};

exports.view = function(req, res) {
	console.log("view");
};

exports.add = function(req, res) {
	console.log("add");
};

exports.update = function(req, res) {
	console.log("update");
};




