/**
 * Vehicle Model created to store the vehicle registered details on the database
 * 
 * --scope - Vehicle Management
 * 
 * --author Kasuni Makalanda
 *
 */

//Importing the mongoose from the installed package - mongoose@8.0.2
const mongoose = require('mongoose');

/**
 * Schema name (local) - vehicleSchema
 */
const vehicleSchema = new mongoose.Schema({

    owner: {
        type: String,
        required: true
    },
    plateNumberType: {
        type: String,
        required: true,
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

/**
 * Schema name on the database - Vehicle
 * 
 * Exported model to be used on the Vehicle route
 */
const Vehicle = mongoose.model("Vehicle", vehicleSchema);
module.exports = Vehicle;