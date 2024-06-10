
'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');

const adminUserSchema = new Schema(
  {
    code:{
      type: String,
      required:false,
    },
    name: {
      type: String,
      required: true,
      uppercase: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    contact: {
      type: Number,
      required: false
    },
    address: {
      type: String,
      required: false
    },
    pincode: {
      type: Number,
      required: false
    },
    city: {
      type: String,
      required: false
    },
    state: {
      type: String,
      required: false
    },
    country: {
      type: String,
      required: false
    },
    status: {
      type: String,
      enum: ['Pending', 'Active', 'Inactive'],
      default: 'Pending'
    },
    role: {
      type: String,
      enum: ['admin', 'PatientStaff', 'ClientStaff', 'InsuranceStaff'],
      required: true
    },
    password: {
      type: String,
      required: true
    },
    regionCode: {
      type: String,
      required: false
    },

    tokens: [{
      reftoken: {
        type: String
      },
      timeStamp: {
        type: String
      }
    }]
  },
  { timestamps: true }
);

adminUserSchema.methods.generateRefreshToken = async function () {
  try {
    let reftoken = jwt.sign(
      { username: this.uniqueId },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h',
      }
    );
    let timeStamp = new Date().toISOString();
    this.tokens = this.tokens.concat({ reftoken, timeStamp });
    await this.save();
    return reftoken;
  } catch (err) {
    console.log("Error generating refresh token:", err);
  }
}

adminUserSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign(
      { username: this.uniqueId },
      process.env.JWT_SECRET,
      {
        expiresIn: '10m',
      }
    );
    return token;
  } catch (err) {
    console.log("Error generating auth token:", err);
  }
}

module.exports = mongoose.model('adminUserModel', adminUserSchema);
