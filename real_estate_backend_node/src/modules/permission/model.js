const mongoose = require("mongoose");
const { MongoError } = require("../../common/errors");

// Schema

const schema = new mongoose.Schema(
  {
    roleId: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
    roleName: { type: String, required: true },
    roleAlias: { type: String, required: true },
    resourceId: { type: mongoose.Schema.Types.ObjectId, ref: "Resource" },
    resourceName: { type: String, required: true },
    resourceAlias: { type: String, required: true },
    isAllowed: { type: Boolean, required: true },
    isDisabled: { type: Boolean, required: true },
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
const ModelName = "Permission";
const Permission = mongoose.model(ModelName, schema);

module.exports = { Model: Permission, name: ModelName };
