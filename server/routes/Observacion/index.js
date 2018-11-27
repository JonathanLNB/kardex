var pg = require('pg');
var direccion = "postgres://gestores:gestores@localhost:5432/tutorias";
var cliente, query;


cliente = new pg.Client(direccion);
cliente.connect();

function agregaRetroalimentacion(req, res, next) {
    query = "update calificacion set observacion = '" + req.body.mensaje +"' where idgrupo = '" + req.body.idgrupo + "' and nocontrol = '" + req.body.nocontrol + "' and parcial = '" + req.body.parcial + "'";
    res.setHeader('Content-Type', 'application/json');
    cliente.query(query).then(req => {
        res.send("{\"valid\":1}");
        res.end();
    }).catch(error => {
        console.log(error);
        res.send("{\"valid\":0}");
        res.end();
    });
}

function getMensajes(req, res, next) {
    var noControl = req.params.nocontrol;
    res.setHeader('Content-Type', 'application/json');
    query = "SELECT array_to_json(array_agg(alumnos)) from (SELECT g.idGrupo as id, g.nombre as nombreGrupo, p.nombre as nombreProfesor, (SELECT array_to_json(array_agg(parciales)) as parciales from (SELECT c.parcial, c.calificacion, c.observacion from calificacion c where noControl = "+noControl+") as parciales) FROM lista join alumno a using(noControl) join grupo g using(idGrupo) join profesor p using(idProfesor) WHERE noControl = "+noControl+") as alumnos";
    cliente.query(query).then(req => {
        const rows = req.rows;
        rows.map(row => {
            var respuesta = row.array_to_json;
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
    agregaRetroalimentacion,
    getMensajes
};