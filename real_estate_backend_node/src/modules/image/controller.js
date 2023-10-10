/* eslint-disable no-undef */
const express = require("express");

const {
  singleUploader,
  multiUploader,
  authenticateRequest,
  authorizeRequest,
} = require("../../common/middlewares");

const router = express.Router();

const sendSingleImageUrl = async (req, res, next) => {
  req.file.path = req.file.path.replace("public\\", "");
  res.status(201).json({ message: "image upload success", data: req.file });
};

const sendMultiImageUrl = async (req, res, next) => {
  req.files = req.files.map((file) => {
    file.path = file.path.replace("public\\", "");
    return file;
  });
  res.status(201).json({ message: "image upload success", data: req.files });
};
router.post(
  "/single",
  authenticateRequest,
  authorizeRequest,
  singleUploader(),

  sendSingleImageUrl
);
router.post(
  "/multiple",
  authenticateRequest,
  authorizeRequest,
  multiUploader(),
  sendMultiImageUrl
);

module.exports = router;
