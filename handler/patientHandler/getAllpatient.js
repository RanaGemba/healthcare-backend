const PatientModel = require('../../model/patientModel');

exports.getAllPatient = async (req, res) => {
  try {
    console.log("Fetching all Patients...");

    const patients = await PatientModel.find();
    console.log("Patients found:", patients);

    res.status(200).json({ success: true, message: 'patinets retrieved successfully', patients: patients });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Error retrieving patients', error: error.message });
  }
};
