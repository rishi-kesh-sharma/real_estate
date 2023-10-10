const Joi = require("joi");

const schema = Joi.object().keys({
  _id: Joi.string().optional(),
  title: Joi.string().required(),
  description: Joi.string().required(),
  short_description: Joi.string(),
  meta_tag: Joi.array().items(Joi.string()),
  meta_description: Joi.string(),
  summary: Joi.string(),
  tags: Joi.array().items(Joi.string()),
  author: Joi.string(), // Assuming author can be an array of strings representing ObjectIds
  keywords: Joi.array().items(Joi.string()),
  slug_url: Joi.string(),
  images: Joi.array(),
});

const validate = (data, user) => {
  const result = schema.validate(data);
  result.value = {
    ...data,
  };
  return result;
};

module.exports = { validate };
