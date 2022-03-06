'use strict'

var express = require('express');
var OrdersController = require('../controllers/orders');
var api = express.Router();                                  //llamar al router para hacer todass las funciones , get, post , put

var multipart = require('connect-multiparty');  // u23 modulo que nos permite subir y enviar fichersos a traves de http

api.post('/order', OrdersController.saveOrder);
api.get('/orders/:page?', OrdersController.getOrder);
api.delete('/order/:id', OrdersController.deleteOrder);



