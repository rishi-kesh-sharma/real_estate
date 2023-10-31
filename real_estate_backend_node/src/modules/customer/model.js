const mongoose = require("mongoose");
const { MongoError } = require("../../common/errors");

const customerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    area: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postcode: { type: String, required: true },
    country: { type: String, required: true },
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

// add indices
// text index for name
customerSchema.index({ name: "text" });

// index for createdAt and updatedAt
customerSchema.index({ createdAt: 1 });
customerSchema.index({ updatedAt: 1 });

// index for email
customerSchema.index({ email: 1 });

// index for phone number
customerSchema.index({ phone: 1 });

// eslint-disable-next-line no-undef
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

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;

// const ModelName = "Product";
// // reference model
// // const Role = mongoose.model("Role", schema);

// module.exports = { Model: Product, name: ModelName };
