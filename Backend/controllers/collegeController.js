const College = require("../models/College");

// GET all colleges
const getColleges = async (req, res) => {
  try {
    const colleges = await College.find();
    res.status(200).json(colleges);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST new college (optional but useful)
const createCollege = async (req, res) => {
  try {
    const { title, description } = req.body;

    const newCollege = new College({
      title,
      description
    });

    const savedCollege = await newCollege.save();
    res.status(201).json(savedCollege);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getColleges,
  createCollege
};
