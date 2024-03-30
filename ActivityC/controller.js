const Event = require("./model");

// get all Events
const getEvents = async (req, res) => {
  try {
    const events = await Event.find({});
    res.status(200).json(events);
  } catch (error) {
    console.error("Error getEvents:", error.message);
    res.status(500);
  }
};

// Add one Event
const addEvent = async (req, res) => {
  try {
    const { title, description, date, location } = req.body;
    const newEvent = new Event({ title, description, date, location });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    console.error("Error getEvents:", error.message);
    res.status(500);
  }
};

// Get Event by ID
const getEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(event);
  } catch (error) {
    console.error("Error getEvents:", error.message);
    res.status(500);
  }
};

// Delete Event by ID
const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByIdAndDelete({ _id: id });
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    console.error("Error getEvents:", error.message);
    res.status(500);
  }
};

// Delete all Events
const deleteAllEvents = async (req, res) => {
  try {
    const result = await Event.deleteMany({});
    res
      .status(200)
      .json({ message: `Deleted ${result.deletedCount} books successfully` });
  } catch (error) {
    console.error("Error getEvents:", error.message);
    res.status(500);
  }
};

// Update Event by ID
const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEvent = req.body;
    const event = await Event.findOneAndUpdate({ _id: id }, updatedEvent);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(event);
  } catch (error) {
    console.error("Error getEvents:", error.message);
    res.status(500);
  }
};

module.exports = {
  getEvents,
  addEvent,
  getEvent,
  deleteEvent,
  deleteAllEvents,
  updateEvent,
};