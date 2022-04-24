const encoder = require("image-to-base64");
const ImageModel = require("../Models/image.model");

// you will write the logic for storing image as base64 string.

// here first step 1. converting the image we received
// to base64 string 2. then storing this string in the db

module.exports.saveImage = async (req, res, next) => {
  try {
    console.log(req.file);

    const mimeType = req.file.mimetype;

    const fileInfo = mimeType.split("/");
    console.log(fileInfo);

    const base64String = await encoder(req.file.path);

    const encodedString = `data:${req.file.mimetype};base64,${base64String}`;

    const image = new ImageModel({
      uriString: encodedString,
      location: req.file.path,
    });

    console.log(image);

    await image.save();

    return res.json(image);
  } catch (err) {
    console.log(err);
    return res.status(500).send("something went wrong...");
  }
};

module.exports.getAllImages = async (req, res, next) => {
  try {
    const images = await ImageModel.find();

    return res.status(200).send(images);
  } catch (err) {
    console.log(err);
    return res.status(500).send("something went wrong...");
  }
};
