const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let marriageDetailSchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    location: {
        type: String,
        default: '',
        required: true
    },
    marriageDate: {
        type: Date,
        default: null,
        required: true
    },
    // Husband Detail Started
    husbandSurname: {
        type: String,
        default: '',
        required: true
    },
    husbandName: {
        type: String,
        default: '',
        required: true
    },
    husbandBirthDate: {
        type: Date,
        default: null,
        required: true
    },
    husbandAge: {
        type: Number,
        default: 0
    },
    statusOfBridegroomTime: {
        type: Number,
        default: 0
    },
    husbandReligious: {
        type: String,
        default: "",
        required: true,
    },
    husbandLocation: {
        type: String,
        default: "",
        required: true,
    },
    husbandAddress: {
        type: String,
        default: "",
        required: true,
    },
    husbandGuardianSurname: {
        type: String,
        default: "",
        required: true,
    },
    husbandGuardianName: {
        type: String,
        default: "",
        required: true,
    },
    husbandGuardianAge: {
        type: Number,
        default: 0,
        required: true,
    },
    husbandGuardianLocation: {
        type: String,
        default: "",
        required: true,
    },
    husbandGuardianAddress: {
        type: String,
        default: "",
        required: true,
    },
    husbandContactLindLine: {
        type: Number,
        default: 0,
    },
    husbandMobileNumber: {
        type: Number,
        default: null,
        required: true,
    },
    husbandEmailAddress: {
        type: String,
        default: '',
        required: true,
    },
    // Wife Detail Started
    wifeSurname: {
        type: String,
        default: '',
        required: true
    },
    wifeName: {
        type: String,
        default: '',
        required: true
    },
    wifeBirthDate: {
        type: Date,
        default: null,
        required: true,
    },
    wifeAge: {
        type: Number,
        default: 0,
        required: true,
    },
    wifeStatusOfBrideAtTime: {
        type: Number,
        default: null,
    },
    wifeReligious: {
        type: String,
        default: '',
        required: true,
    },
    wifeLocation: {
        type: String,
        default: '',
        required: true,
    },
    wifeAddress: {
        type: String,
        default: '',
        required: true,
    },
    wifeGuardianSurname: {
        type: String,
        default: '',
        required: true
    },
    wifeGuardianName: {
        type: String,
        default: '',
        required: true
    },
    wifeGuardianLocation: {
        type: String,
        default: '',
        required: true
    },
    wifeGuardianAddress: {
        type: String,
        default: '',
        required: true
    },
    wifeContactNumber: {
        type: Number,
        default: 0,
    },
    wifeMobileNumber: {
        type: Number,
        default: 0,
    },
    wifeEmail: {
        type: String,
        default: '',
        required: true
    },
    // priest details started
    priestFullName: {
        type: String,
        default: '',
        required: true,
    },
    priestBirthDate: {
        type: Date,
        default: null,
        required: true,
    },
    priestAge: {
        type: Number,
        default: 0,
    },
    priestLocation: {
        type: String,
        default: '',
        required: true
    },
    priestAddress: {
        type: String,
        default: '',
        required: true,
    },
    // witness first detail started
    witnessFirstFullName: {
        type: String,
        default: '',
        required: true,
    },
    witnessFirstBirthDate: {
        type: Date,
        default: null,
        required: true,
    },
    witnessFirstAge: { 
        type: Number,
        default: 0,
        required: true
    },
    witnessFirstAddress: { 
        type: String,
        default: '',
        required: true
    },
    // witness second detail started
    witnessSecondFullName: {
        type: String,
        default: '',
        required: true,
    },
    witnessSecondBirthDate: {
        type: Date,
        default: null,
        required: true,
    },
    witnessSecondAge: { 
        type: Number,
        default: 0,
        required: true
    },
    witnessSecondAddress: { 
        type: String,
        default: '',
        required: true
    },
}, {timestamps: true});

module.exports = mongoose.model('MarriageDetail', marriageDetailSchema);
