 const {createAdminUser} = require('../handler/adminUserHandler/createAdminUser')
const {loginAdminUser} = require("../handler/adminUserHandler/loginAdminUser")
const {getAllAdminUser} = require("../handler/adminUserHandler/getAllAdminUser")

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


