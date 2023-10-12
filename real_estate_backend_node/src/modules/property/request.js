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
  mapIframe: Joi.string().min(10).max(100).optional(),
  postalCode: Joi.number().min(3).max(1000000).optional(),
  contactInfo: Joi.object().keys({
    email: Joi.string().email().optional(),
    phone: Joi.string()
      .regex(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/)
      .optional(),
  }),
  hasPrice: Joi.boolean().required(),
  price: Joi.number().min(0).max(100000000).optional(),
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
  const result = schema.validate(data);
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
