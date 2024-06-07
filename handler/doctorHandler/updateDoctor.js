const DoctorModel = require('../../model/doctorModel');

exports.updateDoctor = async (req, res) => {
  try {
    const doctorId = req.params.id;
    const updatedData = req.body; 
    const updatedDoctor = await DoctorModel.findByIdAndUpdate(doctorId, updatedData, { new: true });

    if (!updatedDoctor) {
      return res.status(404).json({ success: false, message: 'Doctor not found' });
    }

    res.status(200).json({ success: true, message: 'Doctor updated successfully', doctor: updatedDoctor });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating Doctor', error: error.message });
  }
};
