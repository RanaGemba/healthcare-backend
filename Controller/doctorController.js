const {createDoctor} = require('../handler/doctorHandler/createDoctor')
const {getAllDoctor} = require('../handler/doctorHandler/getAllDoctor')
const {updateDoctor} = require('../handler/doctorHandler/updateDoctor')
const {deleteDoctor} = require('../handler/doctorHandler/deleteDoctor')



exports.create_doctor = async (req, res) => {
  try {
    console.log("testing...3")
    await createDoctor(req, res);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
exports.get_all_doctor = async (req, res) => {
    try {
      console.log("testing...3")
      await getAllDoctor(req, res);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  exports.update_doctor = async (req, res) => {
    try {
      await updateDoctor(req, res);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  exports.delete_doctor = async (req, res) => {
    try {
      await deleteDoctor(req, res);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  




