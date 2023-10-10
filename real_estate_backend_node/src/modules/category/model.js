const mongoose = require("mongoose");
const { MongoError } = require("../../common/errors");
// schema
const schema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    alias: { type: String, required: true, unique: true },
    description: { type: String, required: true, unique: true },
    images: [],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      default: "000000000000",
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      default: "000000000000",
    },
  },
  { timestamps: true }
);

// indices
// text index for name
schema.index({ name: "text" });

// index for createdAt and updatedAt
schema.index({ createdAt: 1 });
schema.index({ updatedAt: 1 });

schema.post("save", (error, doc, next) => {
  if (error.name === "MongoError" && error.code === 11000) {
    // if error.message contains the substring 'duplicate key error' then it's a duplicate entry
    if (error.message.includes("duplicate key error")) {
      const keyName = Object.keys(error.keyValue)[0];
      const errorMessage = `${keyMapping[keyName]} already exists`;
      next(new MongoError(errorMessage));
    } else next(new MongoError(error.message));
  } else {
    next();
  }
});

// reference model
const Category = mongoose.model("Category", schema);

const ModelName = "Category";
// reference model

module.exports = { Model: Category, name: ModelName };
