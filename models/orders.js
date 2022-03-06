'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = Schema({
    
    user_name: String,
    address: String,
    items: Number
});
