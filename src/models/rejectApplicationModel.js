const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let rejectApplicationSchema = new Schema({
    message: { 
        type: String,
        default: '',
        required: true
    },
}, {timestamps: true});

module.exports = mongoose.model('RejectApplicationSchema', rejectApplicationSchema);
