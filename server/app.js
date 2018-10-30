var express = require('express');
var path = require('path');
var router = express.Router();
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var pg = require('pg');
var app = express();
var bodyParser = require('body-parser');
//Ejemplo: var direccion = "postgres://usuario:contraseña@localhost:5432/basededatos";
var cliente, query;

/*
  ___                            _                ____ _                     
 |_ _|_ __ ___  _ __   ___  _ __| |_ __ _ _ __   / ___| | __ _ ___  ___  ___ 
  | || '_ ` _ \| '_ \ / _ \| '__| __/ _` | '__| | |   | |/ _` / __|/ _ \/ __|
  | || | | | | | |_) | (_) | |  | || (_| | |    | |___| | (_| \__ \  __/\__ \
 |___|_| |_| |_| .__/ \___/|_|   \__\__,_|_|     \____|_|\__,_|___/\___||___/
               |_|                                                           
  Ejemplo:
  const {notFound, errorHandler} = require('./routes/Middleware');
*/
var app = express();

const {notFound, errorHandler} = require('./routes/Middleware');

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
 router.post('/', funcion);
 router.get('/', funcion);
*/
app.get('/maestro', function(req, res){
	res.sendFile("C:\\Users\\eemsh\\Documents\\ITC\\7\\Gestión de proyectos\\kardex\\client\\public\\maestro.html");
});
app.get('/css/maestro.css', function(req, res){
	res.sendFile("C:\\Users\\eemsh\\Documents\\ITC\\7\\Gestión de proyectos\\kardex\\client\\public\\css\\maestro.css");
});
app.get('/js/maestro.js', function(req, res){
	res.sendFile("C:\\Users\\eemsh\\Documents\\ITC\\7\\Gestión de proyectos\\kardex\\client\\public\\js\\maestro.js");
});
app.get('/images/itc.png', function(req, res){
  res.sendFile("C:\\Users\\eemsh\\Documents\\ITC\\7\\Gestión de proyectos\\kardex\\client\\public\\images\\itc.png");
});
app.get('/images/auditorio.jpg', function(req, res){
  res.sendFile("C:\\Users\\eemsh\\Documents\\ITC\\7\\Gestión de proyectos\\kardex\\client\\public\\images\\auditorio.jpg");
});
app.get('/images/salir.jpg', function(req, res){
  res.sendFile("C:\\Users\\eemsh\\Documents\\ITC\\7\\Gestión de proyectos\\kardex\\client\\public\\images\\salir.jpg");
});

app.use(notFound);
app.use(errorHandler);

module.exports = app;
