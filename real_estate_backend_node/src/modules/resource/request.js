const Joi = require("joi");

const schema = Joi.object().keys({
  _id: Joi.string().optional(),
  name: Joi.string().min(2).max(30).required(),
  alias: Joi.string().required(),
  type: Joi.string().required(),
});

const updateSchema = Joi.object().keys({
  _id: Joi.string().required(),
  name: Joi.string().min(2).max(30).required(),
  alias: Joi.string().required(),
  type: Joi.string().required(),
});

const validate = (data) => {
  const result = schema.validate(data);
  result.value = data;
  return result;
};

const validateUpdate = (data) => {
  const result = updateSchema.validate(data);
  result.value = data;
  return result;
};

module.exports = { validate, validateUpdate };
