const { deleteClinic } = require('../handler/clinicHandler/deleteClinic');
const { getAllClinic } = require('../handler/clinicHandler/getAllClinic');
const { updateClinic } = require('../handler/clinicHandler/updateClinic');
const { createClinic } = require('../handler/clinicHandler/createClinic');

exports.create_clinic = async (req, res) => {
  try {
    await createClinic(req, res);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.get_all_clinic = async (req, res) => {
  try {
    await getAllClinic(req, res);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.update_clinic = async (req, res) => {
  try {
    await updateClinic(req, res);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.delete_clinic = async (req, res) => {
  try {
    await deleteClinic(req, res);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
