const mongoose = require("mongoose");
const { MongoError } = require("../../common/errors");

// schema
const schema = new mongoose.Schema(
  {
    property: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Property",
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

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

schema.index({ property: 1 });
schema.index({ user: 1 });

// index for createdAt and updatedAt
schema.index({ createdAt: 1 });
schema.index({ updatedAt: 1 });

// index for price and cost
schema.index({ price: 1 });

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
const Purchase = mongoose.model("Purchase", schema);

const ModelName = "Purchase";
// reference model
// const Role = mongoose.model("Role", schema);

module.exports = { Model: Purchase, name: ModelName };
