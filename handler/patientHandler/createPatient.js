const PatientModel = require('../../model/patientModel');

exports.createPatient = async (req, res) => {
  try {
    console.log("testing...1")
    let patientData = req.body;
    console.log(req.body)
    console.log(patientData,"testing...2");

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
};
