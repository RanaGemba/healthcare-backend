const AdminUserModel = require('../../model/adminUserModel');

exports.deleteAdminUser = async (req, res) => {
  try {
    const adminUserId = req.params.id;

    const deletedAdminUser = await AdminUserModel.findByIdAndDelete(adminUserId);

    if (!deletedAdminUser) {
      return res.status(404).json({ success: false, message: 'AdminUser not found' });
    }

    res.status(200).json({ success: true, message: 'adminUser deleted successfully', adminUser: deletedAdminUser });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting adminUser', error: error.message });
  }
};
