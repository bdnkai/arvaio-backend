//===== MODEL.JS =========

//------- import mongoose -------
const mongoose = require('../db/connection.js');

//------- create schema function -------
const PropertySchema = new mongoose.Schema({});

//------- instantiate the model w/ schema -------
const Property = mongoose.model('Property', PropertySchema);

//------- export model -------
module.exports = Property;
