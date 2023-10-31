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

// const sellProperty = async (req, res) => {
//   const { isSold, id } = req.body;
//   const selectProperty= await Property.findById(id);

//   if(selectProperty.isSold){
//     res.stat
//   }
//   try {
//     Property.isSold = isSold;
//     await Property.save();
//     res.status(200).json({ success: true, message: "property updated" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

router.get("/detail", getByIdHandler);
router.post(
  "/create",
  // authenticateRequest,
  // authorizeRequest,
  multiUploader(),

  handleValidation(validate),
  saveHandler
);
router.put(
  "/update",
  authenticateRequest,
  authorizeRequest,
  handleValidation(validate),
  updateHandler
);
router.post("/search", searchHandler);
router.post("/count", countHandler);
router.delete("/delete", authenticateRequest, authorizeRequest, deleteHandler);
// router.patch(
//   "/sellproperty",
//   authenticateRequest,
//   authorizeRequest,
//   sellProperty
// );
module.exports = router;
