const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const collegeRoutes = require("./routes/collegeRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/Colleges", collegeRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
