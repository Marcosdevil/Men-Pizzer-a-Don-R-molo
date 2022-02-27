'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = Schema({
    
    User_name: String,
    Items: Number
});