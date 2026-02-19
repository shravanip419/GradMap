const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Third parameter = exact collection name in MongoDB
module.exports = mongoose.model(
  "College",
  collegeSchema,
  "Colleges"
);
