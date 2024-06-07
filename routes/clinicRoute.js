const express = require('express');
const router = express.Router();
const clinicController = require('../Controller/clinicController');

router.route('/create-new-clinic').post(clinicController.create_clinic);
router.route('/get-all-clinic').get(clinicController.get_all_clinic);
router.route('/update-clinic/:id').put(clinicController.update_clinic);  
router.route('/delete-clinic/:id').delete(clinicController.delete_clinic); 

module.exports = router;
