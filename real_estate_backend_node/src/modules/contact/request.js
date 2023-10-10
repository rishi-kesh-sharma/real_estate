const Joi = require("joi");

const schema = Joi.object().keys({
  _id: Joi.string().optional(),
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  subject: Joi.string().required(),
  description: Joi.string().required(),
});

const validate = (data, user) => {
  const result = schema.validate(data);
  result.value = {
    ...data,
  };
  return result;
};

module.exports = { validate };
