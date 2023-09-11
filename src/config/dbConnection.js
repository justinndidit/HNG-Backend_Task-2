const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URI);
    console.log("DB connected Successfully!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = dbConnection;
