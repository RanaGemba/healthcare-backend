const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Destination folder for file uploads

// POST endpoint to handle file uploads
app.post('/v1/api/patient/create-new-patient', upload.fields([
  { name: 'primaryInsuranceCard', maxCount: 1 },
  { name: 'secondaryInsuranceCard', maxCount: 1 },
  { name: 'idCard', maxCount: 1 }
]), async (req, res) => {
  try {
    // Extract form data from req.body and handle storing to MongoDB
    const formData = req.body;
    const primaryInsuranceCard = req.files['primaryInsuranceCard'][0];
    const secondaryInsuranceCard = req.files['secondaryInsuranceCard'][0];
    const idCard = req.files['idCard'][0];

    // Example MongoDB storage logic
    // Save formData, primaryInsuranceCard, secondaryInsuranceCard, idCard to MongoDB
    
    res.status(200).json({ message: 'Patient created successfully' });
  } catch (error) {
    console.error('Error creating patient:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
