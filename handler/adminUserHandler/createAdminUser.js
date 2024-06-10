const AdminUserModel = require('../../model/adminUserModel');
const bcrypt = require('bcrypt');
const { generateAdminCode, generatePatientStaffCode,generateClientStaffCode,generateInsuranceStaffCode } = require('../../middlewares/utils/generateCode');

exports.createAdminUser = async (req, res, next) => {
  try {
    console.log("Start creating admin user");

    // Destructure the required fields directly from req.body
    const { name, contact, email, address, city, state, pincode, country, regionCode, status, role, password } = req.body;
    console.log("req.body:", req.body);

    // Check if the user already exists
    const existingUser = await AdminUserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Password hashed");

    // Generate code based on the role
    let code;
    if (role === "admin") {
      code = await generateAdminCode();
    } else if (role === 'PatientStaff') {
      code = await generatePatientStaffCode(); 
    } else if (role === 'ClientStaff') {
      code = await generateClientStaffCode(); 
    } else if (role === 'InsuranceStaff') {
      code = await generateInsuranceStaffCode(); 
    } else {
      return res.status(400).json({
        message: "Invalid role",
      });
    }

    
    const newUser = new AdminUserModel({
      code,
      name,
      contact,
      email,
      address,
      city,
      state,
      pincode,
      country,
      regionCode,
      status,
      role,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();
    console.log("User saved");

    // Respond with the new user data
    res.status(200).json({
      data: newUser,
      message: "User created successfully",
    });
  } catch (error) {
    console.error("Failed to add user:", error);
    res.status(500).json({
      message: "Failed to add user",
      error: error.message,
    });
  }
};
