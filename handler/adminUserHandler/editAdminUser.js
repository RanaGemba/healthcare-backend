const AdminUserModel = require('../../model/adminUserModel');

exports.updateAdminUser = async (req, res) => {
  try {
    const adminUserId = req.params.id;
    const updatedData = req.body; 
    const updatedAdminUser = await AdminUserModel.findByIdAndUpdate(adminUserId, updatedData, { new: true });

    if (!updatedAdminUser) {
      return res.status(404).json({ success: false, message: 'AdminUser not found' });
    }

    res.status(200).json({ success: true, message: 'AdminUser updated successfully', adminUser: updatedAdminUser });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating AdminUser', error: error.message });
  }
};
