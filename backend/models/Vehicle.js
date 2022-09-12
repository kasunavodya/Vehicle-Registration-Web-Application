const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({

    owner: {
        type: String,
        required: true
    },
    plateNumber: {
        type: String,
        required: true,
        unique: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    typeOption: {
        type: String,
        required: true
    },
    typeName: {
        type: String,
        required: true
    },
    inspectionDate: {
        type: String,
        required: true
    },
    insurance: {
        type: String,
        required: true
    }
    
})

const Vehicle = mongoose.model("Vehicle", vehicleSchema);
module.exports = Vehicle;