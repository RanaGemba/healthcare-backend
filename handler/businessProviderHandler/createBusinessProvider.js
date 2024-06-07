const BusinessProviderModel = require('../../model/businessProviderModel');

exports.createBusinessProvider = async (req, res) => {
  try {
    console.log("testing...1")
    let businessProviderData = req.body;
    console.log(req.body)
    console.log(businessProviderData,"testing...2");

    const newBusinessProvider = new BusinessProviderModel(businessProviderData);
    console.log("newBusinessProvider", newBusinessProvider);

    try {
      const savedBusinessProvider = await newBusinessProvider.save();
      console.log("savedBusinessProvider", savedBusinessProvider);
      res.status(201).json({ success: true, message: 'businessProvider created successfully', businessProvider: savedBusinessProvider });
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, message: 'Error saving businessProvider', error: err.message });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error creating businessProvider', error: error.message });
  }
};
