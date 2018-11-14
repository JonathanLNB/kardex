var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();

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

const {notFound, errorHandler} = require('./routes/Middleware');
const {getGrupos} = require('./routes/Grupo');
const {agregaRetroalimentacion, getMensajes} = require('./routes/Observacion');
const {infoAlumno} = require('./routes/Alumno');

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
app.post("/api/observacion", function (req, res, next){
    agregaRetroalimentacion(req, res, next)
});

app.get("/api/grupos/:id", function (req, res, next){
    getGrupos(req, res, next)
});

app.get("/api/observaciones/:nocontrol", function (req, res, next){
    getMensajes(req, res, next)
});

app.get("/api/alumno/:nocontrol", function (req, res, next){
    infoAlumno(req, res, next)
});
app.use(notFound);
app.use(errorHandler);

module.exports = app;
