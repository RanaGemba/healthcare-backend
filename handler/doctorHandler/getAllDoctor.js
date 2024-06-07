const DoctorModel = require('../../model/doctorModel');

exports.getAllDoctor = async (req, res) => {
  try {
    console.log("Fetching all Doctors...");
    const {clinicId} = req.params
    console.log(clinicId)
    const doctors = await DoctorModel.find({clinic:clinicId});
    console.log("Doctors found:", doctors);

    res.status(200).json({ success: true, message: 'Doctors retrieved successfully', doctors: doctors });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Error retrieving clinics', error: error.message });
  }
};
