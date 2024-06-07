const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const businessProviderSchema = new Schema({
  name: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: false
  },
});

const BusinessProvider = model('BusinessProvider', businessProviderSchema);

module.exports = BusinessProvider;
