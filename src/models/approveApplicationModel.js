const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let approveApplicationSchema = new Schema({
    dateAndTime: { 
        type: Date,
        default: null,
        required: true
    },
    requestCertificationList: {
        type: String,
        default: '',
        required: true,
    },
    comment: {
        type: String,
        default: '',
    },
}, {timestamps: true});

module.exports = mongoose.model('ApproveApplication', approveApplicationSchema);
