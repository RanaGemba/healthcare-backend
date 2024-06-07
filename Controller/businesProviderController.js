const {createBusinessProvider} = require('../handler/businessProviderHandler/createBusinessProvider')
const {getAllBusinessProvider} = require('../handler/businessProviderHandler/getAllBusinessProvider')
exports.create_businessProvider = async (req, res) => {
  try {
    console.log("testing...3")
    await createBusinessProvider(req, res);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.get_all_businessProvider = async (req, res) => {
    try {
      console.log("testing...3")
      await getAllBusinessProvider(req, res);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  




