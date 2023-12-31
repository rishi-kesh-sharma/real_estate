const mongoose = require("mongoose");
const { MongoError } = require("../../common/errors");

// schema
const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    purpose: { type: String, required: true, enums: ["rent", "sale"] },
    isFeatured: {
      type: Boolean,
      default: false,
    },
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
        type: String,
        required: false,
      },
    },
    hasPrice: {
      type: Boolean,
      required: true,
      default: true,
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
    images: {
      type: Array,
      default: [],
    },
    landmarks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Landmark",
      },
    ],
    bathroom: {
      type: Number,
      default: 0,
      required: true,
    },
    room: {
      type: Number,
      default: 0,
      required: true,
    },
    area: {
      type: Number,
      default: 0,
      required: true,
    },
    rentFrequency: {
      type: String,
      default: "month",
      enum: ["day", "week", "month", "year"],
    },
    furnishingStatus: {
      type: String,
      default: "not-furnished",
      enum: ["not-furnished", "semi-furnished", "fully-furnished"],
      required: true,
    },
    isSold: {
      type: Boolean,
      default: false,
      required: false,
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
schema.index({ name: "text" });
schema.index({ purpose: "text" });
schema.index({ "location.municipality": "text" });
schema.index({ "location.district": "text" });
schema.index({ "location.province": "text" });
schema.index({ "location.tole": "text" });
schema.index({ postalCode: 1 });
schema.index({ hasPrice: 1 });
schema.index({ isFeatured: 1 });
schema.index({ category: 1 });
schema.index({ subCategory: 1 });
schema.index({ ownership: 1 });

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
const Property = mongoose.model("Property", schema);

const ModelName = "Property";
// reference model
// const Role = mongoose.model("Role", schema);

module.exports = { Model: Property, name: ModelName };
