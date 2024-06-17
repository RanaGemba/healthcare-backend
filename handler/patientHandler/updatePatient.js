const PatientModel = require('../../model/patientModel');

exports.updatePatient = async (req, res) => {
  try {
    const patientId = req.params.id;
    const updatedData = req.body;

    if (!patientId) {
      return res.status(400).json({ success: false, message: 'Patient ID is required' });
    }

    console.log('Updating patient with ID:', patientId); // Debugging
    console.log('Updated data:', updatedData); // Debugging

    const updatedPatient = await PatientModel.findByIdAndUpdate(patientId, updatedData, { new: true });

    if (!updatedPatient) {
      return res.status(404).json({ success: false, message: 'Patient not found' });
    }

    res.status(200).json({ success: true, message: 'Patient updated successfully', patient: updatedPatient });
  } catch (error) {
    console.error('Error updating patient:', error);
    res.status(500).json({ success: false, message: 'Error updating patient', error: error.message });
  }
};
