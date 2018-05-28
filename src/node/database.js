/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <HakunaMacouta> wrote this file.  As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return.   Thomas Blanc
 * ----------------------------------------------------------------------------
 */
let path = require("path");
const dbFile = path.join(__dirname, 'movies.db');
const sqlite = require('sqlite3').verbose();
const Axios = require('axios');
const imdb = require('imdb-api');
const apikey = "a9c723f0";
const default_poster = '/src/static/img/default_poster.png';

let db = new sqlite.Database(dbFile, (err) => {
	if(err) {
		console.error(err.message);
	}
	console.log('Connected to the movies database.');
});

exports.all = function(req, res) {
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

exports.delete = function(req, res) {
	db.run("DELETE FROM movie WHERE id=?", [req.params.id], function(err) {
		if(err)
			throw err;
		res.send('delete')
	})
};

exports.add = function(req, res) {
	//TODO FIND A BETTER WAY TO INSERT, it's messy like this.
	let movie = req.body;
	let poster_url= movie.poster_url;
	Axios.get('http://omdbapi.com/?apikey=' + apikey + '&i=' + movie.imdb).then(response => {
		console.log(response.data);
		if(response.data.Poster)
			poster_url = response.data.Poster;
		db.get("INSERT INTO movie (title, year, lang, genre, synopsis, firstname, lastname, birthdate, nationality, poster_url) " +
			"VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
			movie.title, movie.year, movie.lang, movie.genre, movie.synopsis, movie.firstname, movie.lastname, movie.birthdate, movie.nationality, poster_url,
			(err) => {
				if(err) {
					throw err;
				}
			});
		res.send('add')
	});
};

exports.update = function(req, res) {
	res.send('update')
};

exports.mark = function(req, res) {
	console.log(req.body);
	db.run("UPDATE movie SET mark=? WHERE id=?", [req.body.rating, req.params.id], function(err) {
		if(err)
			throw err;
		res.send('update mark')
	})
};




