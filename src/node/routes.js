/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <HakunaMacouta> wrote this file.  As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return.   Thomas Blanc
 * ----------------------------------------------------------------------------
 */

let database = require('./database.js');
let app = require('./app');

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, OPTIONS, POST, DELETE, PUT");
	next();
});

app.get('/api/movies/all', database.all);
app.get('/api/movies/:id', database.view);
app.delete('/api/movies/:id', database.delete);
app.put('/api/movies/:id', database.update);
app.put('/api/movies/:id/mark', database.mark);
app.post('/api/movies', database.add);