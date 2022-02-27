'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var productSchema = Schema({
    Name: String,
    Price: Number,
    Stock: Number,
    Image: String
});


module.exports = mongoose.model('Product', productSchema)