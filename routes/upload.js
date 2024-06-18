const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const router = express.Router();

// Set up storage engine for multer
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    const uploadPath = 'uploads/';
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: function(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// Initialize upload variable
const upload = multer({ storage: storage });

// Endpoint to handle file uploads
router.post('/upload', upload.fields([
  { name: 'primaryInsuranceCard', maxCount: 1 },
  { name: 'secondaryInsuranceCard', maxCount: 1 },
  { name: 'idCard', maxCount: 1 }
]), (req, res) => {
  try {
    // Handle the uploaded files
    const primaryInsuranceCard = req.files['primaryInsuranceCard'] ? req.files['primaryInsuranceCard'][0].path : null;
    const secondaryInsuranceCard = req.files['secondaryInsuranceCard'] ? req.files['secondaryInsuranceCard'][0].path : null;
    const idCard = req.files['idCard'] ? req.files['idCard'][0].path : null;

    res.status(200).json({
      primaryInsuranceCard,
      secondaryInsuranceCard,
      idCard
    });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
