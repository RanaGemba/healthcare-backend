const DoctorModel = require('../../model/doctorModel');

exports.deleteDoctor = async (req, res) => {
  try {
    const doctorId = req.params.id;

    const deletedDoctor = await DoctorModel.findByIdAndDelete(doctorId);

    if (!deletedDoctor) {
      return res.status(404).json({ success: false, message: 'Doctor not found' });
    }

    res.status(200).json({ success: true, message: 'Doctor deleted successfully', doctor: deletedDoctor });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting Doctor', error: error.message });
  }
};
