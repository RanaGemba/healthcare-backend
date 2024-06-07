const ClinicModel = require('../../model/clinicModel');

exports.deleteClinic = async (req, res) => {
  try {
    const clinicId = req.params.id;

    const deletedClinic = await ClinicModel.findByIdAndDelete(clinicId);

    if (!deletedClinic) {
      return res.status(404).json({ success: false, message: 'Clinic not found' });
    }

    res.status(200).json({ success: true, message: 'Clinic deleted successfully', clinic: deletedClinic });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting clinic', error: error.message });
  }
};
