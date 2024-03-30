const Location = require("./model");

// get all Locations
const getLocations = async (req, res) => {
  try {
    const locations = await Location.find({});
    res.status(200).json(locations);
  } catch (error) {
    console.error("Error getLocations:", error.message);
     res.status(500); //.json({ message: error.message });
  }
};

// Add one Location
const addLocation = async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;
    const newLocation = new Location({ name, address, latitude, longitude });
    await newLocation.save();
    res.status(201).json(newLocation);
  } catch (error) {
    console.error("Error getLocations:", error.message);
    res.status(500); //.json({ message: error.message });
  }
};

// Get Location by ID
const getLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findById(id);
    if (!location) {
      return res.status(404).json({ location: "Location not found" });
    }
    res.status(200).json(location);
  } catch (error) {
    console.error("Error getLocations:", error.message);
    res.status(500); //.json({ message: error.message });
  }
};

// Delete Location by ID
const deleteLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findByIdAndDelete({ _id: id });
    if (!location) {
      return res.status(404).json({ location: "Location not found" });
    }
    res.status(200).json({ location: "Location deleted successfully" });
  } catch (error) {
    console.error("Error getLocations:", error.message);
    res.status(500); //.json({ message: error.message });
  }
};

// Delete all Locations
const deleteAllLocations = async (req, res) => {
  try {
    const result = await Location.deleteMany({});
    res
      .status(200)
      .json({ location: `Deleted ${result.deletedCount} locations successfully` });
  } catch (error) {
    console.error("Error getLocations:", error.message);
    res.status(500); //.json({ message: error.message });
  }
};

// Update Location by ID
const updateLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedLocation = req.body;
    const location = await Location.findOneAndUpdate({ _id: id }, updatedLocation);
    if (!location) {
      return res.status(404).json({ location: "Location not found" });
    }
    res.status(200).json(location);
  } catch (error) {
    console.error("Error getLocations:", error.message);
    res.status(500); //.json({ message: error.message });
  }
};

module.exports = {
  getLocations,
  addLocation,
  getLocation,
  deleteLocation,
  deleteAllLocations,
  updateLocation,
};