 const router = require('express').Router();

 const VehicleModel = require('../models/Vehicle');
 
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
 
 router.route('/getAllVehicles').get(async (req, res) => {
     await VehicleModel.find({})
         .then(data => {
             res.status(200).send({ data: data });
         }).catch(error => {
             res.status(500).send({ error: error });
         })
 });
 
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