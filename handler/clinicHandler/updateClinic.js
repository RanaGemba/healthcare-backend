const ClinicModel = require('../../model/clinicModel');

exports.updateClinic = async (req, res) => {
  try {
    const clinicId = req.params.id;
    const updatedData = req.body; 
    const updatedClinic = await ClinicModel.findByIdAndUpdate(clinicId, updatedData, { new: true });

    if (!updatedClinic) {
      return res.status(404).json({ success: false, message: 'Clinic not found' });
    }

    res.status(200).json({ success: true, message: 'Clinic updated successfully', clinic: updatedClinic });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating clinic', error: error.message });
  }
};
