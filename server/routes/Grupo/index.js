var pg = require('pg');
var direccion = "postgres://gestores:gestores@localhost:5432/tutorias";
var cliente, query;
var respuesta = "";


cliente = new pg.Client(direccion);
cliente.connect();
function getGrupos(req, res, next){
    var idProfesor = req.params.id, idGrupo, noControl, salida, contG, contA = 0;
    var grupo;
    salida = {grupos: []};
    res.setHeader('Content-Type', 'application/json');
    query = "SELECT idGrupo as id, nombre from grupo where idProfesor = " + idProfesor;
    cliente.query(query)
        .then(req => {
            query = "SELECT row_to_json(maestro) as maestro from (SELECT idProfesor as id, concat(nombre,' ',apellido) as nombre FROM profesor WHERE idProfesor = "+idProfesor+") as maestro";
            cliente.query(query).then(respue => {
                var maestro = respue.rows;
                salida.maestro = maestro[0].maestro;
            }).catch(error => {
                console.log(error);
                cliente.end();
            });
            var rows = req.rows;
            contG = rows.length;
            for (var i = 0; i < rows.length; i++) {
                idGrupo = rows[i].id;
                grupo = {alumnos:[]};
                grupo.id = idGrupo;
                grupo.nombre = rows[i].nombre;
                query = "SELECT noControl as id from lista where idGrupo = " + idGrupo;
                cliente.query(query).then(resp => {
                    var alumnos = resp.rows;
                    contG-=1;
                    contA += alumnos.length;
                    for (var e = 0; e < alumnos.length; e++) {
                        noControl = alumnos[e].id;
                        query = "SELECT row_to_json(alumnos) from (" +
                            "SELECT a.noControl as id, a.nombre, (SELECT array_to_json(array_agg(parciales)) as parciales from (" +
                            "SELECT c.parcial, c.calificacion, c.observacion from calificacion c where noControl = " + noControl +
                            " and idGrupo = " + idGrupo + ") as parciales) FROM lista join alumno a using(noControl) WHERE noControl = " + noControl +
                            " and idGrupo = " + idGrupo +
                            ") as alumnos";
                        cliente.query(query).then(respu => {
                            var alumno = respu.rows;
                            contA-=1;
                            grupo.alumnos.push(alumno[0].row_to_json);
                            if(contG == 0 && contA == 0)
                                res.send(salida);
                        }).catch(error => {
                            console.log(error);
                            cliente.end();
                        });
                    }
                }).catch(err => {
                    console.log(err);
                    cliente.end()
                });
            }
            salida.grupos.push(grupo);
        }).catch(err => {
        console.log(err);
        cliente.end()
    });
}

module.exports = {
    getGrupos,
};