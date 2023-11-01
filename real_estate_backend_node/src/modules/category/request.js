const Joi = require("joi");

const schema = Joi.object().keys({
  _id: Joi.string().optional(),
  name: Joi.string().required(),
  alias: Joi.string().required(),
  description: Joi.string().required(),
  // images: Joi.array().items(Joi.string().required()).required(),
  images: Joi.array().items(Joi.string().required()).optional(),
});

const validate = (data, user) => {
  console.log(data, "this is data of category");

  const result = schema.validate(data);
  result.value = {
    ...data,
    createdBy: user.id,
    updatedBy: user.id,
  };
  return result;
};

module.exports = { validate };
