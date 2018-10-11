var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var pg = require('pg');
var app = express();
var bodyParser = require('body-parser');
//Ejemplo: var direccion = "postgres://xico:fsd74126@localhost:5432/xico";
var cliente, query;

/*
  ___                            _                ____ _                     
 |_ _|_ __ ___  _ __   ___  _ __| |_ __ _ _ __   / ___| | __ _ ___  ___  ___ 
  | || '_ ` _ \| '_ \ / _ \| '__| __/ _` | '__| | |   | |/ _` / __|/ _ \/ __|
  | || | | | | | |_) | (_) | |  | || (_| | |    | |___| | (_| \__ \  __/\__ \
 |___|_| |_| |_| .__/ \___/|_|   \__\__,_|_|     \____|_|\__,_|___/\___||___/
               |_|                                                           
  Ejemplo:
  var indexRouter = require('./routes/Alumnos/index');
*/
var app = express();

const {notFound, errorHandler} = require('./routes/Middleware')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
/*
  _     _                                          __ _            _      
 | |   | | __ _ _ __ ___   __ _ _ __   _ __ ___   /_/| |_ ___   __| | ___   ___
 | |   | |/ _` | '_ ` _ \ / _` | '__| | '_ ` _ \ / _ \ __/ _ \ / _` |/ _ \ / __|
 | |___| | (_| | | | | | | (_| | |    | | | | | |  __/ || (_) | (_| | (_) |\__ \
 |_____|_|\__,_|_| |_| |_|\__,_|_|    |_| |_| |_|\___|\__\___/ \__,_|\___/ |___/

Ejemplo
 //app.use('/', indexRouter);
*/

app.use(notFound);
app.use(errorHandler);

module.exports = app;
