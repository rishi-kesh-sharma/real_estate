const express = require("express");
const { getQuery, modelName } = require("./service");
const {
  getByIdHandler,
  saveHandler,
  updateHandler,
  searchHandler: baseSearchHandler,
  countHandler: baseCountHandler,
  deleteHandler,
} = require("../../core/controller");
const { validate } = require("./request");
const { handleValidation } = require("../../common/middlewares");
const { searchOne } = require("../../core/repository");

const router = express.Router();

const searchHandler = async (req, res, next) => {
  req.searchQuery = getQuery({ ...req.body });
  return baseSearchHandler(req, res, next);
};
const countHandler = async (req, res, next) => {
  req.searchQuery = getQuery({ ...req.body });
  return baseCountHandler(req, res, next);
};
const upsertHandler = async (req, res, next) => {
  const { _id: id } = req.body;
  if (id) {
    return updateHandler(req, res, next);
  }
  return saveHandler(req, res, next);
};

const checkHandler = async (req, res) => {
  if (req.body) {
    const user = await searchOne(req.body, modelName);
    if (user) {
      return res
        .status(200)
        .send({ status: "success", message: "Category found" });
    }
  }
  return res
    .status(200)
    .send({ status: "error", message: "Category not found" });
};
router.get("/detail", getByIdHandler);
router.post("/create", handleValidation(validate), saveHandler);
router.put("/update", handleValidation(validate), updateHandler);
router.post("/search", searchHandler);
router.post("/count", countHandler);
router.delete("/delete", deleteHandler);
router.post("/upsert", handleValidation(validate), upsertHandler);
router.post("/check", checkHandler);

module.exports = router;
