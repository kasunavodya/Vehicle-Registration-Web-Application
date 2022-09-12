 /**
 * Routes (API) for Vehicles created to use API on the front end to perform
 * all opertaions related to Vehicles
 * 
 * --scope - Vehicle Management
 * --Implemented APIs'  - ADD Vehicle               | GET ALL Vehicles      |  GET Vehicle BY ID
 *                        UPDATE Vehicle            | DELETE Vehicle
 * 
 * --author Kasuni Makalanda
 *
 */
 
 const router = require('express').Router();

 /**
 * Imported Vehicle Model - Vehicle.js - MODEL
 */
 const VehicleModel = require('../models/Vehicle');
 
 /**
 * API DESC      - New vehicle registration
 * API           - http://localhost:3001/vehicle/addVehicle
 */
 router.route('/addVehicle').post(async (req, res) => {
     if (req.body) {
 
         const Vehicle = new VehicleModel(req.body);
         await Vehicle.save()
             .then(data => {
                 res.status(200).send({ data: data });
             }).catch(error => {
                 res.status(500).send({ error: error });
             })
     }
 });
 
/**
 * API DESC      - Get all vehicle details
 * API           - http://localhost:3001/vehicle/getAllVehicles
 */
 router.route('/getAllVehicles').get(async (req, res) => {
     await VehicleModel.find({})
         .then(data => {
             res.status(200).send({ data: data });
         }).catch(error => {
             res.status(500).send({ error: error });
         })
 });
 
/**
 * API DESC      - Get vehicle details by ID
 * API           - http://localhost:3001/vehicle/getVehicleById/<ID>
 */
 router.route('/getVehicleById/:id').get(async (req, res) => {
     if (req.params && req.params.id) {
         await VehicleModel.findById(req.params.id)
             .then(data => {
                 res.status(200).send({ data: data });
             }).catch(error => {
                 res.status(500).send({ error: error });
             })
     }
 });
 
 /**
 * API DESC      - Update vehicle details by using ID
 * API           - http://localhost:3001/vehicle/updateVehicle/<ID>
 */
 router.route("/updateVehicle/:id").put(async (req, res) => {
     const owner = req.body.owner;
     const plateNumberType = req.body.plateNumberType;
     const plateNumber = req.body.plateNumber;
     const manufacturer = req.body.manufacturer;
     const typeOption = req.body.typeOption;
     const typeName = req.body.typeName;
     const inspectionDate = req.body.inspectionDate;
     const insurance = req.body.insurance;
 
     const Id = req.params.id;
 
     try {
         await VehicleModel.findById(Id, (err, updatedVehicleObject) => {
             updatedVehicleObject.owner = owner;
             updatedVehicleObject.plateNumberType = plateNumberType;
             updatedVehicleObject.plateNumber = plateNumber;
             updatedVehicleObject.manufacturer = manufacturer;
             updatedVehicleObject.typeOption = typeOption;
             updatedVehicleObject.typeName = typeName;
             updatedVehicleObject.inspectionDate = inspectionDate;
             updatedVehicleObject.insurance = insurance;
 
             updatedVehicleObject.save()
                 .then(data => {
                     res.status(200).send({ data: data });
                 }).catch(error => {
                     res.status(500).send({ error: error });
                 })
         });
     } catch (err) {
         console.log(err);
     }
 });
 
/**
 * API DESC      - Remove vehicle details by using ID
 * API           - http://localhost:3001/vehicle/deleteVehicle/<ID>
 */
 router.route('/deleteVehicle/:id').delete(async (req, res) => {
     if (req.params && req.params.id) {
         await VehicleModel.findByIdAndDelete(req.params.id)
             .then(data => {
                 res.status(200).send({ data: data });
             }).catch(error => {
                 res.status(500).send({ error: error });
             })
     }
 });
 
 module.exports = router;