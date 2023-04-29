const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let contactBookSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name.']
    },
    phones: {
        type: Array,
        default: []
    },
    city: {
        type: String,
        required: [true, 'Please enter you city.']
    }
}, {timestamps: true});

module.exports = mongoose.model('ContactBook', contactBookSchema);
