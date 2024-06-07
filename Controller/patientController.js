const {createPatient} = require('../handler/patientHandler/createPatient')
const {getAllPatient} = require('../handler/patientHandler/getAllpatient')
const { updatePatient } = require('../handler/patientHandler/updatePatient');
exports.create_patient = async (req, res) => {
  try {
    console.log("testing...3")
    await createPatient(req, res);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
exports.get_all_patient = async (req, res) => {
    try {
      console.log("testing...3")
      await getAllPatient(req, res);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  exports.update_patient = async (req, res) => {
    try {
      await updatePatient(req, res);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  




