const Goal = require("./model");

// Render Controller: Render index.html with goals using EJS
const renderGoals = async (req, res) => {
  try {
    const goals = await Goal.find({});
    res.render("../views/index", { goals }); // Render index.ejs with goals data
  } catch (error) {
    console.error("Error rendering index.html:", error);
    res.status(500).send("Internal Server Error");
  }
};

// get all Goals
const getGoals = async (req, res) => {
  try {
    const goals = await Goal.find({});
    res.status(200).json(goals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add one Goal
const addGoal = async (req, res) => {
  try {
    const { title, description, targetDate, achieved } = req.body;
    const newGoal = new Goal({ title, description, targetDate, achieved });
    await newGoal.save();
    res.status(201).json(newGoal);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "try again later" });
  }
};

// Delete all Goals
const deleteAllGoals = async (req, res) => {
  try {
    const result = await Goal.deleteMany({});
    res
      .status(200)
      .json({ message: `Deleted ${result.deletedCount} books successfully` });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "try again later" });
  }
};

module.exports = {
  getGoals,
  renderGoals,
  addGoal,
  deleteAllGoals,
};