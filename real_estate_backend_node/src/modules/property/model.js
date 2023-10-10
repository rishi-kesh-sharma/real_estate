const mongoose = require("mongoose");
const { MongoError } = require("../../common/errors");

// schema
const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    purpose: { type: String, required: true, enums: ["rent", "sale"] },
    location: {
      province: {
        type: String,
        required: true,
      },
      district: {
        type: String,
        required: true,
      },
      municipality: {
        type: String,
        required: true,
      },
      ward: {
        type: Number,
        required: false,
      },
      tole: {
        type: String,
        required: false,
      },
    },
    mapIframe: {
      type: String,
      required: false,
    },
    postalCode: {
      type: String,
      required: false,
    },
    contactInfo: {
      email: {
        type: String,
        required: false,
      },
      phone: {
        type: Number,
        required: false,
      },
    },
    hasPrice: {
      type: Boolean,
      required: true,
    },
    price: {
      type: Number,
      required: false,
    },
    description: { type: String, required: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
    subCategory: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "SubCategory",
    },
    ownership: {
      type: String,
      required: false,
    },

    highlights: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Highlight",
      },
    ],
    amenities: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Amenity",
      },
    ],
    images: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Image",
      },
    ],
    landmarks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Landmark",
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
      const errorMessage = `${keyMapping[keyName]} already exists`;
      next(new MongoError(errorMessage));
    } else next(new MongoError(error.message));
  } else {
    next();
  }
});

// reference model
const Property = mongoose.model("Property", schema);

const ModelName = "Property";
// reference model
// const Role = mongoose.model("Role", schema);

module.exports = { Model: Property, name: ModelName };
