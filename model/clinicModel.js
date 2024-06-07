const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const clinicSchema = new Schema({
  name: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: false
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',  
    required: false
  }
});

const Clinic = model('Clinic', clinicSchema);

module.exports = Clinic;
