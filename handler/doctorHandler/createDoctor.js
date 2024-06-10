const DoctorModel = require('../../model/doctorModel');
const { generateDoctorCode } = require('../../middlewares/utils/generateCode');


exports.createDoctor = async (req, res) => {
  try {
    console.log("testing...1");
    
    let doctorData = req.body;
    const { clinic } = req.params; // Get clinic from URL parameters

    console.log(req.body);
    console.log(doctorData, "testing...2");


    const code = await generateDoctorCode();
    doctorData.code = code
    console.log(doctorData);
    // Add clinic to doctorData
    doctorData.clinic = clinic;

    const newDoctor = new DoctorModel(doctorData);
    console.log("newDoctor", newDoctor);

    try {
      const savedDoctor = await newDoctor.save();
      console.log("savedDoctor", savedDoctor);
      res.status(201).json({ success: true, message: 'Doctor created successfully', doctor: savedDoctor });
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, message: 'Error saving doctor', error: err.message });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error creating doctor', error: error.message });
  }
};
