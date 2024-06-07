const PatientModel = require('../../model/patientModel');

exports.updatePatient = async (req, res) => {
  try {
    const patientId = req.params.id;
    const updatedData = req.body;
    console.log(req.params.id); 
    console.log(req.body);
    const updatedPatient = await PatientModel.findByIdAndUpdate(patientId, updatedData, { new: true });
console.log(updatedPatient);
    if (!updatedPatient) {
      return res.status(404).json({ success: false, message: 'Patient not found' });
    }

    res.status(200).json({ success: true, message: 'Patient updated successfully', patient: updatedPatient });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating Patient', error: error.message });
  }
};
