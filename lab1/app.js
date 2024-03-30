const express = require("express");
const app = express();

const connectDB = require("./db");
const {
  getGoals,
  addGoal,
  getGoal,
  updateGoal,
  deleteGoal,
  deleteAllGoals,
} = require("./controller");

//Important: will be discussed next week
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
// GET all Goals
app.get("/goals", getGoals);

// POST a new Goal
app.post("/goals", addGoal);

// GET a single Goal
app.get("/goals/:id", getGoal);

// Update Goal using PUT
app.put("/goals/:id", updateGoal);

// DELETE a Goal
app.delete("/goals/:id", deleteGoal);

// DELETE all Goal
app.delete("/goals", deleteAllGoals);

const PORT = 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});