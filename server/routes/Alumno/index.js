var pg = require('pg');
var direccion = "postgres://gestores:gestores@localhost:5432/tutorias";
var cliente, query;


cliente = new pg.Client(direccion);
cliente.connect();

function infoAlumno(req, res, next) {
    var noControl = req.params.nocontrol;
    res.setHeader('Content-Type', 'application/json');
    query =" SELECT row_to_json(alumno) from (SELECT noControl, concat(nombre, ' ', apellido) as nombre, correo FROM alumno WHERE noControl = "+noControl+") as alumno";
    cliente.query(query).then(req => {
        const rows = req.rows;
        rows.map(row => {
            var respuesta = row.row_to_json;
            res.send(respuesta);
            console.log(respuesta);
            res.end();
        });

    }).catch(error => {
        console.log(error);
        res.send("{\"valid\":0}");
        res.end();
    });
}

module.exports = {
    infoAlumno
};