 const {createAdminUser} = require('../handler/adminUserHandler/createAdminUser')
const {loginAdminUser} = require("../handler/adminUserHandler/loginAdminUser")
const {getAllAdminUser} = require("../handler/adminUserHandler/getAllAdminUser")
const {updateAdminUser} = require("../handler/adminUserHandler/editAdminUser")
const {deleteAdminUser} = require("../handler/adminUserHandler/editAdminUser")


exports.create_adminUser = async (req, res) => {
  try {
    await createAdminUser(req, res);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.login_adminUser = async (req, res) => {
  try {
    await loginAdminUser(req, res);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.get_all_adminUser = async (req, res) => {
  try {
    await getAllAdminUser(req, res);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.update_adminUser = async (req, res) => {
  try {
    await updateAdminUser(req, res);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
exports.delete_adminUser = async (req, res) => {
  try {
    await deleteAdminUser(req, res);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

