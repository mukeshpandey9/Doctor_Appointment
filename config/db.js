const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `MongoDB Connected Sucessfully on ${mongoose.connection.host}`.bgGreen
        .white
    );
  } catch (error) {
    console.log(`Mongodb connection error ${error}`);
  }
};

module.exports = connectDB;
