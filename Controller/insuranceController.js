const { createInsurance } = require('../handler/insuranceHandler/createInsurance');
const { getAllInsurance } = require('../handler/insuranceHandler/getAllInsurance');

exports.create_insurance = async (req, res) => {
  try {
    console.log("testing...3");
    await createInsurance(req, res);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.get_all_insurance = async (req, res) => {
  try {
    console.log("testing...3");
    await getAllInsurance(req, res);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
