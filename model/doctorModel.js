const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const doctorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  clinic: {
    type: String,
    required: true
  }
});

const Doctor = model('Doctor', doctorSchema);

module.exports = Doctor;
