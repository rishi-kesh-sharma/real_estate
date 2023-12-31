const mongoose = require("mongoose");
const { MongoError } = require("../../common/errors");

// schema
const schema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    alias: { type: String, required: true, unique: true },
    relatedCategories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
    relatedSubCategories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory",
      },
    ],
    fieldType: {
      type: String,
      enums: ["select", "checkbox", "radio", "number", "text"],
    },
    options: [
      {
        id: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        label: {
          type: String,
          required: true,
        },
        value: {
          type: String,
          required: true,
        },
      },
    ],
    description: { type: String, required: true },

    images: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Image",
      },
    ],
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
schema.index({ fieldType: "text" });

// index for createdAt and updatedAt
schema.index({ createdAt: 1 });
schema.index({ updatedAt: 1 });

schema.post("save", (error, doc, next) => {
  if (error.name === "MongoError" && error.code === 11000) {
    // if error.message contains the substring 'duplicate key error' then it's a duplicate entry
    if (error.message.includes("duplicate key error")) {
      const keyName = Object.keys(error.keyValue)[0];
      // eslint-disable-next-line no-undef
      const errorMessage = `${keyMapping[keyName]} already exists`;
      next(new MongoError(errorMessage));
    } else next(new MongoError(error.message));
  } else {
    next();
  }
});
// reference model
const Property = mongoose.model("Highlight", schema);

const ModelName = "Highlight";
// reference model

module.exports = { Model: Property, name: ModelName };
