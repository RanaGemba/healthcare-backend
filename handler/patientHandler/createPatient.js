const PatientModel = require('../../model/patientModel');
const { generatePatientCode } = require('../../middlewares/utils/generateCode');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Set up storage engine for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = 'uploads/';
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// Initialize upload variable
const upload = multer({ storage: storage }).fields([
  { name: 'primaryInsuranceCard', maxCount: 1 },
  { name: 'secondaryInsuranceCard', maxCount: 1 },
  { name: 'idCard', maxCount: 1 }
]);

exports.createPatient = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'File upload failed', error: err });
    }

    try {
      let patientData = req.body;
      console.log(req.body);
      const code = await generatePatientCode();
      patientData.code = code;

      // Add file paths to patientData
      if (req.files && req.files['primaryInsuranceCard']) {
        patientData.primaryInsuranceCard = req.files['primaryInsuranceCard'][0].path;
      }
      if (req.files && req.files['secondaryInsuranceCard']) {
        patientData.secondaryInsuranceCard = req.files['secondaryInsuranceCard'][0].path;
      }
      if (req.files && req.files['idCard']) {
        patientData.idCard = req.files['idCard'][0].path;
      }

      const newPatient = new PatientModel(patientData);
      console.log("newPatient", newPatient);

      try {
        const savedPatient = await newPatient.save();
        console.log("savedPatient", savedPatient);
        res.status(201).json({ success: true, message: 'Patient created successfully', patient: savedPatient });
      } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: 'Error saving Patient', error: err.message });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error creating Patient', error: error.message });
    }
  });
};
