const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const variables = require('../config/variables.json')

let movieSchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    producer: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        enum: variables.moviesType
    }
}, {timestamps: true});

module.exports = mongoose.model('Movie', movieSchema);
