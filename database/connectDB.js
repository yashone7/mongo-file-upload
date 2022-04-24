const mongoose = require("mongoose");
const config = require("config");
const uri = config.get("dbURI");

const connectDB = async () => {
  try {
    await mongoose.connect(
      uri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
      },
      console.log("mongodb connected...")
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = { connectDB };
