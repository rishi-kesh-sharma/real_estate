const mongoose = require("mongoose");
const { MongoError } = require("../../common/errors");
// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

// Create a schema for the contact
const schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    short_description: { type: String },
    meta_tag: { type: [String] },
    meta_description: { type: String },
    tags: { type: [String] },
    author: { type: Schema.Types.ObjectId, ref: "User" },
    keywords: { type: [String] },
    slug_url: { type: String },
    images: [],
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
    updatedBy: { type: Schema.Types.ObjectId, ref: "User" },
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
      // eslint-disable-next-line no-undef
      const errorMessage = `${keyMapping[keyName]} already exists`;
      next(new MongoError(errorMessage));
    } else next(new MongoError(error.message));
  } else {
    next();
  }
});
const ModelName = "Blog";
module.exports = { Model: mongoose.model(ModelName, schema), name: ModelName };
