const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("mongodb connected..");
  } catch (err) {
    console.log(err.message);
    //exit procee with failure
    process.exit(1);
  }
};

module.exports = connectDB;
