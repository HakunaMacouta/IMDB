/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <HakunaMacouta> wrote this file.  As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return.   Thomas Blanc
 * ----------------------------------------------------------------------------
 */

let database = require('./database.js');


app.get('/api/movies/all', database.list);

app.get('/api/movies/:id', database.view);
app.post('api/movies/:id', database.update);
app.post('api/movies', database.add);