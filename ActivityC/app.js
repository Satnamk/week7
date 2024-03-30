const express = require("express");
const app = express();

const connectDB = require("./db");
const {
  getEvents,
  addEvent,
  getEvent,
  updateEvent,
  deleteEvent,
  deleteAllEvents,
} = require("./controller");

//Important: will be discussed next week
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
// GET all Events
app.get("/events", getEvents);

// POST a new Event
app.post("/events", addEvent);

// GET a single Event
app.get("/events/:id", getEvent);

// Update Event using PUT
app.put("/events/:id", updateEvent);

// DELETE a Event
app.delete("/events/:id", deleteEvent);

// DELETE all Event
app.delete("/events", deleteAllEvents);

const PORT = 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});