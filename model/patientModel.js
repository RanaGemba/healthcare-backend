const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const attachmentSchema = new Schema({
  fileName: {
    type: String,
    required: true
  },
  filePath: {
    type: String,
    required: true
  },
  fileType: {
    type: String,
    required: true
  },
  fileSize: {
    type: Number,
    required: true
  }
}, { _id: false });

const patientSchema = new Schema({
  todaysDate: {
    type: Date,
    required: false
  },
  clinicName: {
    type: String,
    required: false
  },
  firstName: {
    type: String,
    required: false
  },
  lastName: {
    type: String,
    required: false
  },
  dateOfBirth: {
    type: Date,
    required: false
  },
  age: {
    type: Number,
    required: false
  },
  address: {
    type: String,
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
  phone: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  sex: {
    type: String,
    enum: ['male', 'female'],
    required: false
  },
  maritalStatus: {
    type: String,
    required: false
  },
  emergencyContactName: {
    type: String,
    required: false
  },
  emergencyContactPhone: {
    type: String,
    required: false
  },
  primaryInsurancePlanName: {
    type: String,
    required: false
  },
  secondaryInsurancePlanName: {
    type: String,
    required: false
  },
  
  primaryInsuranceInsuredName: {
    type: String,
    required: false
  },
  lCode: {
    type: String,
    required: false
  },
  
  productName: {
    type: String,
    required: false
  },
  remarks: {
    type: String,
    required: false
  },
  needsAuthorization: {
    type: String,
    enum: ['yes', 'no'],
    required: false
  },
  
  status: {
    type: String,
    enum: ['Approved', 'Pending', 'Rejected'],
    required: false
  },

  ssn: {
    type: String,
    required: false
  },
  zipcode: {
    type: String,
    required: false
  },

});



const Patient = model('Patient', patientSchema);

module.exports = Patient;