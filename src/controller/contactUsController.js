const ContactUs = require('../models/contactUsModel'); // Assuming the ContactUs model is in the same directory

// @desc    Create a new contact message
// @route   POST /api/contact
// @access  Public
exports.createContactMessage = async (req, res) => {
    try {
      const contactMessage = new ContactUs(req.body);
      await contactMessage.save();
      console.log(contactMessage)
      res.status(201).json({ success: true, data: contactMessage });
    } catch (err) {
      res.status(400).json({ success: false, error: err.message });
    }
  };

// @desc    Get all contact messages
// @route   GET /api/contact
// @access  Public
exports.getContactMessages = async (req, res) => {
  try {
    const contactMessages = await ContactUs.countDocuments();
    console.log(contactMessages)
    res.status(200).json({ success: true, data: contactMessages,meta:{total:contactMessages.length} });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// @desc    Delete a contact message
// @route   DELETE /api/contact/:id
// @access  Public
exports.deleteContactMessage = async (req, res) => {
  try {
    const contactMessage = await ContactUs.findByIdAndDelete(req.params.id);
    if (!contactMessage) {
      return res.status(404).json({ success: false, error: 'Contact message not found' });
    }
    res.status(204).json({ success: true, data: null });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};