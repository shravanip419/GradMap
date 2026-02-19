const express = require("express");
const router = express.Router();

const {
  getColleges,
  createCollege
} = require("../controllers/collegeController");

router.get("/", getColleges);
router.post("/", createCollege);

module.exports = router;
