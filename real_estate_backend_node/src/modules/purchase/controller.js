/* eslint-disable no-undef */
const express = require("express");
const { getQuery } = require("./service");
const {
  saveHandler,
  searchHandler: baseSearchHandler,
  countHandler: baseCountHandler,
  deleteHandler,
} = require("../../core/controller");
const { validate } = require("./request");
const { handleValidation } = require("../../common/middlewares");
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

router.post("/create", handleValidation(validate), saveHandler);
router.post("/search", searchHandler);
router.post("/count", countHandler);
router.delete("/delete", deleteHandler);

module.exports = router;
