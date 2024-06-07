'use strict';
const router = require("express").Router();
const patientController = require("../Controller/patientController")

router.route('/create-new-patient').post(patientController.create_patient);
router.route('/get-all-patient').get(patientController.get_all_patient);
router.route('/update-patient/:id').put(patientController.update_patient); 



module.exports =router