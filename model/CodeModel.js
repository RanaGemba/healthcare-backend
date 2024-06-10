const { Int32, Long } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const codeSchema = new Schema(
  {
    admin: {  
        type: Number ,
        default: 0
      },
    clinic: {  
            type: Number ,
            default: 0
          },
    doctor: {  
    type: Number ,
    default: 0
    },
    clinicStaff: {  
    type: Number ,
    default: 0
    },
    insuranceStaff: {  
        type: Number ,
        default: 0
    },
    patientStaff: {  
        type: Number ,
        default: 0
    },
    patient: {  
        type: Number ,
        default: 0
    },
 
  
}
);

module.exports = mongoose.model("Code", codeSchema);