const express = require('express');
const router = express.Router();
const insuranceController = require('../Controller/insuranceController'); 
router.post('/create-new-insurance', insuranceController.create_insurance);
router.get('/get-all-insurance', insuranceController.get_all_insurance);

module.exports = router;
