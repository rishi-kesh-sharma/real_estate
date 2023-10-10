const Joi = require("joi");

const schema = Joi.object().keys({
  _id: Joi.string().optional(),
  name: Joi.string().required(),
  alias: Joi.string().required(),
  relatedCategory: Joi.array().items(Joi.string()).required(),
  description: Joi.string().required(),
  images: Joi.array().items(Joi.string().required()).optional(), // Assuming images are array of ObjectIDs as strings and optional
});

const validate = (data, user) => {
  const result = schema.validate(data);
  result.value = {
    ...data,
    createdBy: user.id,
    updatedBy: user.id,
  };
  return result;
};

module.exports = { validate };
