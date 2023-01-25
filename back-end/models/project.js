'use strict'






let mongoose =  require('mongoose');
let Schema = mongoose.Schema;

let projectSchema = Schema({

    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,
    image: String

});

module.exports = mongoose.model('Project', projectSchema);
























