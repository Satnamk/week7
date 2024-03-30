const express = require("express");
const app = express();

const connectDB = require("./db");
const {
  getGoals,
  renderGoals,
  addGoal,
  deleteAllGoals,
} = require("./controller");

//Important: will be discussed next week
app.use(express.json());

// Set views directory for EJS templates
app.set("views", "views");
// Set EJS as the view engine
app.set("view engine", "ejs");
// Serve static files from the "public" directory
app.use(express.static("public"));

// Connect to MongoDB
connectDB();

// Routes

// Route to render index.html with goals using EJS
app.get("/", renderGoals);

// GET all Goals
app.get("/api/goals", getGoals);
// Add a new Goal
app.post("/api/goals", addGoal);
// DELETE all Goal
app.delete("/api/goals", deleteAllGoals);

const PORT = 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});