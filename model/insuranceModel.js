const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const insuranceSchema = new Schema({
  InsuranceName: {
    type: String,
    required: false
  },
  InsuranceType: {
    type: String,
    required: false
  },
  InsuranceProvider: {
    type: String,
    required: false
  },
  Description: {
    type: String,  
    required: false
  },
});

const Insurance = model('Insurance', insuranceSchema);

module.exports = Insurance;
