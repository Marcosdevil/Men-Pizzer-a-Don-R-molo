'use strict'

var express = require('express');           
var bodyParser = require('body-parser');

var app = express();

//cargaremos las rutas

//configuramos el body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//configurar las cabeceras al final
// configurar las rutas bases
app.get('/pruebas', function(req, res){
    res.status(200).send({message: 'La concha de tu madre All Boys!'});
});

module.exports = app;