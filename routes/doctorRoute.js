'use strict';
const router = require("express").Router();
const doctorController = require("../Controller/doctorController")

router.route('/create-new-doctor/:clinic').post(doctorController.create_doctor);
router.route('/get-all-doctor/:clinicId').get(doctorController.get_all_doctor);
router.route('/update-doctor/:id').put(doctorController.update_doctor);  
router.route('/delete-doctor/:id').delete(doctorController.delete_doctor); 



module.exports =router