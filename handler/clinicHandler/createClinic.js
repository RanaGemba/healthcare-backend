const ClinicModel = require('../../model/clinicModel');
const { generateClinicCode } = require('../../middlewares/utils/generateCode');


exports.createClinic = async (req, res) => {
  try {
    console.log("testing...1")
    let clinicData = req.body;
    console.log(req.body)
    console.log(clinicData,"testing...2");
    const code = await generateClinicCode();
    clinicData.code = code
    console.log(clinicData);
    const newClinic = new ClinicModel(clinicData);
    console.log("newClinic", newClinic);

    try {
      const savedClinic = await newClinic.save();
      console.log("savedClinic", savedClinic);
      res.status(201).json({ success: true, message: 'Clinic created successfully', clinic: savedClinic });
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, message: 'Error saving clinic', error: err.message });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error creating clinic', error: error.message });
  }
};
