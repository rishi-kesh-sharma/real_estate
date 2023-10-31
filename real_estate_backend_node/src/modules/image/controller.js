/* eslint-disable no-undef */
const express = require("express");

const { singleUploader, multiUploader } = require("../../common/middlewares");

const router = express.Router();

const sendSingleImageUrl = async (req, res) => {
  console.log(req.file, "this is image file");
  try {
    req.file.path = req.file.path.replace("public\\", "");
    res.status(201).json({ message: "image upload success", data: req.file });
  } catch (error) {
    res.status(500).json({ messsage: `internal server error${error.message}` });
  }
};

const sendMultiImageUrl = async (req, res) => {
  try {
    req.files = req.files.map((file) => {
      // eslint-disable-next-line no-param-reassign
      file.path = file.path.replace("public\\", "");
      return file;
    });
    res.status(201).json({ message: "image upload success", data: req.files });
  } catch (error) {
    res.status(500).json({ messsage: `internal server error${error.message}` });
  }
};
router.post(
  "/single",

  singleUploader(),
  // upload.single("image"),

  sendSingleImageUrl
);
router.post(
  "/multiple",

  multiUploader(),
  sendMultiImageUrl
);

module.exports = router;
