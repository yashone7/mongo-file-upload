const router = require("express").Router();
const imageService = require("../services/imageService");
const uuid = require("uuid");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "upload/",
  filename: (req, file, cb) => {
    const mimeType = file.mimetype;

    const fileInfo = mimeType.split("/");
    console.log(fileInfo);
    if (fileInfo[0] === "image") {
      cb(null, file.fieldname + `-${uuid.v4()}` + `.${fileInfo[1]}`);
    }
  },
});

const upload = multer({ storage });
// const upload = multer({ dest: "/uploads" });

router.post("/images", upload.single("myImage"), (req, res, next) => {
  return imageService.saveImage(req, res, next);
});

router.get("/images", (req, res, next) => {
  return imageService.getAllImages(req, res, next);
});

module.exports = router;
