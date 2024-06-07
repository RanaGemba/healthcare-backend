
const AdminUserModel = require('../../model/adminUserModel')
const bcrypt = require('bcrypt')
// exports.createAdminUser = async (req, res) => {
//   try {
//     console.log("testing...1")
//     let adminUserData = req.body;
//     console.log(req.body)
//     console.log(adminUserData,"testing...2");

//     const newAdminUser = new AdminUserModel(adminUserData);
//     console.log("newAdminUser", newAdminUser);

//     try {
//       const saveAdminUser = await newAdminUser.save();
//       console.log("saveAdminUser", saveAdminUser);
//       res.status(201).json({ success: true, message: 'AdminUser created successfully', AdminUser: saveAdminUser });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json({ success: false, message: 'Error saving AdminUser', error: err.message });
//     }
//   } catch (error) {
//     res.status(500).json({ success: false, message: 'Error creating AdminUser', error: error.message });
//   }
// };


exports.createAdminUser = async (req, res, next) => {
  try {
      console.log("start");
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

      // Create a new user
      const newUser = new AdminUserModel({
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
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({
          message: "Failed to add user",
      });
  }
};
