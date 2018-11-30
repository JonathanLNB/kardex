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
app.get('/', function(req, res){
	res.sendFile("C:\\Users\\eemsh\\Documents\\ITC\\7\\Gestión de proyectos\\kardex\\index.html");
});
app.get('/maestro', function(req, res){
	res.sendFile("C:\\Users\\eemsh\\Documents\\ITC\\7\\Gestión de proyectos\\kardex\\client\\public\\maestro.html");
});
app.get('/css/maestro.css', function(req, res){
	res.sendFile("C:\\Users\\eemsh\\Documents\\ITC\\7\\Gestión de proyectos\\kardex\\client\\public\\css\\maestro.css");
});
app.get('/js/maestro.js', function(req, res){
	res.sendFile("C:\\Users\\eemsh\\Documents\\ITC\\7\\Gestión de proyectos\\kardex\\client\\public\\js\\maestro.js");
});
app.get('/alumno', function(req, res){
	res.sendFile("C:\\Users\\eemsh\\Documents\\ITC\\7\\Gestión de proyectos\\kardex\\Front-end\\alumno\\AlumnoView.html");
});
app.get('/css/alumno.css', function(req, res){
	res.sendFile("C:\\Users\\eemsh\\Documents\\ITC\\7\\Gestión de proyectos\\kardex\\Front-end\\alumno\\AlumnoCss.css");
});
app.get('/js/alumno.js', function(req, res){
	res.sendFile("C:\\Users\\eemsh\\Documents\\ITC\\7\\Gestión de proyectos\\kardex\\Front-end\\alumno\\AlumnoController.js");
});
app.get('/tutor', function(req, res){
	res.sendFile("C:\\Users\\eemsh\\Documents\\ITC\\7\\Gestión de proyectos\\kardex\\Front-end\\tutor\\TutorView.html");
});
app.get('/css/tutor.css', function(req, res){
	res.sendFile("C:\\Users\\eemsh\\Documents\\ITC\\7\\Gestión de proyectos\\kardex\\Front-end\\tutor\\TutorCss.css");
});
app.get('/js/tutor.js', function(req, res){
	res.sendFile("C:\\Users\\eemsh\\Documents\\ITC\\7\\Gestión de proyectos\\kardex\\Front-end\\tutor\\TutorController.js");
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
