/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <HakunaMacouta> wrote this file.  As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return.   Thomas Blanc
 * ----------------------------------------------------------------------------
 */
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
module.exports = app;

require('./database.js');
require('./routes.js');

const port = 3000;

app.use(bodyParser.json()); //parse JSON body
app.use(bodyParser.urlencoded()); //parse x-www-form-urlencoded body
app.listen(port, () => console.log('node server listening on port ' + port.toString()));
