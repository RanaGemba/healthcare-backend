const InsuranceModel = require('../../model/insuranceModel');

exports.createInsurance = async (req, res) => {
  try {
    console.log("testing...1");
    let insuranceData = req.body;
    console.log(req.body);
    console.log(insuranceData, "testing...2");
    
    const newInsurance = new InsuranceModel(insuranceData);
    console.log("newInsurance", newInsurance);

    try {
      const savedInsurance = await newInsurance.save();
      console.log("savedInsurance", savedInsurance);
      res.status(201).json({ success: true, message: 'Insurance created successfully', insurance: savedInsurance });
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, message: 'Error saving Insurance', error: err.message });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error creating Insurance', error: error.message });
  }
};
