const express = require("express");
const app = express();

const connectDB = require("./db");
const {
  getInventories,
  addInventory,
  getInventory,
  updateInventory,
  deleteInventory,
  deleteAllInventories,
} = require("./controller");

//Important: will be discussed next week
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
// GET all Inventories
app.get("/inventories", getInventories);

// POST a new Inventory
app.post("/inventories", addInventory);

// GET a single Inventory
app.get("/inventories/:id", getInventory);

// Update Inventory using PUT
app.put("/inventories/:id", updateInventory);

// DELETE a Inventory
app.delete("/inventories/:id", deleteInventory);

// DELETE all Inventory
app.delete("/inventories", deleteAllInventories);

const PORT = 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});