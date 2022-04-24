const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  uriString: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: false,
  },
});

const imageModel = mongoose.model("Images", imageSchema);

module.exports = imageModel;
