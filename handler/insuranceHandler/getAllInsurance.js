const InsuranceModel = require('../../model/insuranceModel');

exports.getAllInsurance = async (req, res) => {
  try {
    console.log("Fetching all Insurance...");

    const insurances = await InsuranceModel.find({});
    console.log("Insurances found:", insurances);

    res.status(200).json({ success: true, message: 'Insurance retrieved successfully', insurances: insurances });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Error retrieving insurances', error: error.message });
  }
};
