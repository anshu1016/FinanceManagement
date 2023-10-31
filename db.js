const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_DB;
const initializeDatabase = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true

    });
    console.log("Connected Successfully!");
  } catch (err) {
    console.log("ERROR in Connecting MongoDB => ", err);
  }
};

module.exports = initializeDatabase;