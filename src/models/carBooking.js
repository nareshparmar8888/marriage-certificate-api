const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let carBookingSchema = new Schema({
    carId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Car'
    },
    bookingDate: {
        type: Date,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('CarBooking', carBookingSchema);
