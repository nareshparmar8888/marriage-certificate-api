const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let carSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rent: {
        type: Number,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Car', carSchema);
