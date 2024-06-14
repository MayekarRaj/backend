const Seminar = require('../models/seminarSchema');

exports.getSeminars = async (req, res) => {
  try {
    const seminars = await Seminar.findAll();
    res.json(seminars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createSeminar = async (req, res) => {
  try {
    const seminar = await Seminar.create(req.body);
    res.status(201).json(seminar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
