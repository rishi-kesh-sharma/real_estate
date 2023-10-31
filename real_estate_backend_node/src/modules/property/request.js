const Joi = require("joi");

const schema = Joi.object().keys({
  _id: Joi.string().optional(),
  name: Joi.string().required(),
  purpose: Joi.string().min(3).max(30).required().valid("rent", "sale"),
  location: Joi.object().keys({
    province: Joi.string().required(),
    district: Joi.string().required(),
    municipality: Joi.string().required(),
    ward: Joi.number().optional().max(35).min(0),
    tole: Joi.string().optional(),
  }),

  mapIframe: Joi.string()
    .min(10)
    .max(1000000)
    .message("error in mapIframe")
    .optional(),
  postalCode: Joi.number().min(3).max(1000000).optional(),
  contactInfo: Joi.object().keys({
    email: Joi.string().email().optional(),
    phone: Joi.string()
      .regex(/^[6789]\d{9}$/)
      .message("Phone number must be a 10-digit number")
      .optional(),
  }),
  hasPrice: Joi.boolean().required(),
  isFeatured: Joi.boolean().required(),
  price: Joi.number().min(0).max(100000000).optional(),
  bathroom: Joi.number().min(0).max(100000000),
  room: Joi.number().min(0).max(100000000),
  area: Joi.number().min(0).max(100000000),
  rentFrequency: Joi.string().required(),
  furnishingStatus: Joi.string().required(),
  isSold: Joi.boolean().optional(),
  description: Joi.string().min(3).max(100),
  category: Joi.string().required(),
  subCategory: Joi.string().required(),
  ownership: Joi.string().optional(),
  highlights: Joi.array().items(Joi.string().required()).optional(),
  amenities: Joi.array().items(Joi.string().required()).optional(),
  images: Joi.array().items(Joi.string().required()).optional(),
  landmarks: Joi.array().items(Joi.string().required()).optional(),
});

const validate = (data) => {
  const tempData = { ...data };

  if (typeof tempData.location === "string") {
    try {
      tempData.location = JSON.parse(tempData.location);
    } catch (error) {
      // Handle any parsing errors here
      throw new Error("Error parsing 'location' property as JSON");
    }
  }
  if (typeof tempData.contactInfo === "string") {
    try {
      tempData.contactInfo = JSON.parse(tempData.contactInfo);
    } catch (error) {
      // Handle any parsing errors here
      throw new Error("Error parsing 'contactInfo' property as JSON");
    }
  }
  if (typeof tempData.highlights === "string") {
    try {
      tempData.highlights = JSON.parse(tempData.highlights);
    } catch (error) {
      // Handle any parsing errors here
      throw new Error("Error parsing 'highlights' property as JSON");
    }
  }
  if (typeof tempData.amenities === "string") {
    try {
      tempData.amenities = JSON.parse(tempData.amenities);
    } catch (error) {
      // Handle any parsing errors here
      throw new Error("Error parsing 'amenities' property as JSON");
    }
  }

  const result = schema.validate(tempData);

  // const temp = { ...data };
  // if (!data.manufacturingDate) {
  //   temp.manufacturingDate = new Date();
  // } else temp.manufacturingDate = new Date(data.manufacturingDate);

  // if (!data.expiryDate) {
  //   temp.expiryDate = new Date(
  //     new Date() + data.size * 365 * 24 * 60 * 60 * 1000
  //   );
  // }

  // result.value = temp;
  return result;
};

module.exports = { validate };
