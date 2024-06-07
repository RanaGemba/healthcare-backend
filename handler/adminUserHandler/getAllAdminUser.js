const adminUserModel = require('../../model/adminUserModel');

exports.getAllAdminUser = async (req, res) => {
  try {
    console.log("Fetching a adminUser...");

    const adminUsers = await adminUserModel.find({});
    console.log("adminUser found:", adminUsers);

    res.status(200).json({ success: true, message: 'AdminUser retrieved successfully', adminUsers: adminUsers });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Error retrieving adminUsers', error: error.message });
  }
};
