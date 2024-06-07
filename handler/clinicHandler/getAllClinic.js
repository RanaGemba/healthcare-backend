const ClinicModel = require('../../model/clinicModel');

exports.getAllClinic = async (req, res) => {
  try {
    console.log("Fetching all clinics...");

    const clinics = await ClinicModel.find({});
    console.log("Clinics found:", clinics);

    res.status(200).json({ success: true, message: 'Clinics retrieved successfully', clinics: clinics });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Error retrieving clinics', error: error.message });
  }
};
