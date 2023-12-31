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
} = require("../../common/middlewares");

const router = express.Router();

const searchHandler = async (req, res, next) => {
  req.searchQuery = getQuery({ ...req.body });
  return baseSearchHandler(req, res, next);
};
const countHandler = async (req, res, next) => {
  req.searchQuery = getQuery({ ...req.body });
  return baseCountHandler(req, res, next);
};

router.get("/detail", authenticateRequest, authorizeRequest, getByIdHandler);
router.post("/create", handleValidation(validate), saveHandler);
router.put(
  "/update",
  authenticateRequest,
  authorizeRequest,
  handleValidation(validate),
  updateHandler
);
router.post("/search", authenticateRequest, authorizeRequest, searchHandler);
router.post("/count", authenticateRequest, authorizeRequest, countHandler);
router.delete("/delete", authenticateRequest, authorizeRequest, deleteHandler);
module.exports = router;
