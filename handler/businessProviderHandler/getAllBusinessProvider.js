const BusinessProviderModel = require('../../model/businessProviderModel');

exports.getAllBusinessProvider = async (req, res) => {
  try {
    console.log("Fetching all businessProvider...");

    const businessProviders = await BusinessProviderModel.find({});
    console.log("Clinics found:", businessProviders);

    res.status(200).json({ success: true, message: 'businessProviderretrieved successfully', businessProviders: businessProviders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Error retrieving businessProviders', error: error.message });
  }
};
