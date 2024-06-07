// const AdminUserModel =  require("../../model/adminUserModel")

// exports.loginAdminUser = async (req, res)=> {
//   const { email, password } = req.body;

//   const user = await AdminUserModel.findOne({ email });

//   if (!user) {
//     return res.status(404).json({ message: 'User not found' });
//   }
//   if (user.password !== password) {
//     return res.status(401).json({ message: 'Incorrect password' });
//   }

//   // Login successful
//   res.status(200).json({ message: 'Login successful', user });
// }


const bcrypt = require("bcrypt");
const AdminUserModel = require('../../model/adminUserModel')
// const adminUserModel = require('../model/adminUserModel');
const bodyParser = require('body-parser');

const jwt = require("jsonwebtoken");
const AdminUserToken = require('../../model/adminUserToken')
// const AdminUserToken = require('../model/adminUserToken')
const {saveLogInfo} = require('../../middlewares/logger/logInfo');
// const { saveLogInfo } = require("../middlewares/logger/logInfo");
const duration = require("dayjs/plugin/duration");
const dayjs = require("dayjs");
dayjs.extend(duration);

const LOG_TYPE = {
    SIGN_IN: "sign in",
    LOGOUT: "logout",
};

const LEVEL = {
    INFO: "info",
    ERROR: "error",
    WARN: "warn",
};

const MESSAGE = {
    SIGN_IN_ATTEMPT: "Admin user attempting to sign in",
    SIGN_IN_ERROR: "Error occurred while signing in admin user: ",
    INCORRECT_EMAIL: "Incorrect email",
    INCORRECT_PASSWORD: "Incorrect password",
    LOGOUT_SUCCESS: "Admin user has logged out successfully",
};

exports.loginAdminUser = async (req, res, next) => {
  console.log("hello");
  console.log(req.body);
  await saveLogInfo(req, MESSAGE.SIGN_IN_ATTEMPT, LOG_TYPE.SIGN_IN, LEVEL.INFO);

  try {
    const { email, password } = req.body;
    console.log(req.body);
    const existingAdminUser = await AdminUserModel.findOne({
      email: { $eq: email },
    });
    console.log(existingAdminUser);
    if (!existingAdminUser) {
      await saveLogInfo(req, MESSAGE.INCORRECT_EMAIL, LOG_TYPE.SIGN_IN, LEVEL.ERROR);
      return res.status(404).json({
        message: "Invalid credentials",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, existingAdminUser.password);

    console.log(isPasswordCorrect);

    if (!isPasswordCorrect) {
      await saveLogInfo(req, MESSAGE.INCORRECT_PASSWORD, LOG_TYPE.SIGN_IN, LEVEL.ERROR);
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const payload = {
      id: existingAdminUser._id,
      email: existingAdminUser.email,
      role: existingAdminUser.role
    };

    console.log("testing...1");

    const accessToken = jwt.sign(payload, process.env.SECRET, {
      expiresIn: "30m",
    });

    console.log(accessToken)


    const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET, {
      expiresIn: "7d",
    });

    console.log(refreshToken)

    console.log("testing...2");

    try {
      const existingToken = await AdminUserToken.findOne({
        adminUser: { $eq: existingAdminUser._id.toString() },
      });

      if (existingToken?.adminUser) {
        await AdminUserToken.deleteOne({ _id: existingToken._id });
      }
    } catch (err) {
      console.error(err);
    }

    const newRefreshToken = new AdminUserToken({
      adminUser: existingAdminUser._id,
      refreshToken,
      accessToken,
    });
    await newRefreshToken.save();

    res.status(200).json({
      accessToken,
      refreshToken,
      accessTokenUpdatedAt: new Date().toLocaleString(),
      user: {
        _id: existingAdminUser._id,
        name: existingAdminUser.name,
        email: existingAdminUser.email,
        role: existingAdminUser.role
      },
    });
  } catch (err) {
    await saveLogInfo(req, MESSAGE.SIGN_IN_ERROR + err.message, LOG_TYPE.SIGN_IN, LEVEL.ERROR);

    res.status(500).json({
      message: "Something went wrong",
    });
  }
};
