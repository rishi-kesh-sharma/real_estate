/* eslint-disable no-undef */
const express = require("express");
const { getQuery } = require("./service");
const {
  getByIdHandler,
  saveHandler,
  updateHandler,
  searchHandler: baseSearchHandler,
  countHandler: baseCountHandler,
  deleteHandler,
} = require("../../core/controller");
const { validate } = require("./request");
const {
  handleValidation,
  authenticateRequest,
  authorizeRequest,
  multiUploader,
} = require("../../common/middlewares");
// const { Property } = require("./model");

const router = express.Router();

const searchHandler = async (req, res, next) => {
  req.searchQuery = getQuery(req.body);
  return baseSearchHandler(req, res, next);
};

const countHandler = async (req, res, next) => {
  req.searchQuery = getQuery(req.body);
  return baseCountHandler(req, res, next);
};

router.get("/detail", getByIdHandler);
router.post(
  "/create",
  authenticateRequest,
  authorizeRequest,
  multiUploader(),
  handleValidation(validate),
  saveHandler
);
router.put(
  "/update",
  authenticateRequest,
  authorizeRequest,
  multiUploader(),
  handleValidation(validate),
  updateHandler
);
router.post("/search", searchHandler);
router.post("/count", countHandler);
router.delete("/delete", authenticateRequest, authorizeRequest, deleteHandler);
router.patch("/sellproperty", updateHandler);
module.exports = router;
