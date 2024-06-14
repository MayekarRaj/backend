const FAQ = require('../models/faqSchema');

exports.getFAQs = async (req, res) => {
  try {
    const faqs = await FAQ.findAll();
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createFAQ = async (req, res) => {
  try {
    const faq = await FAQ.create(req.body);
    res.status(201).json(faq);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
