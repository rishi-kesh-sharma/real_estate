const Joi = require("joi");

const schema = Joi.object().keys({
  _id: Joi.string().optional(),
  name: Joi.string().required(),
  alias: Joi.string().required(),
  relatedPurpose: Joi.array()
    .items(Joi.string().valid("rent", "sale"))
    .required(),
  relatedCategory: Joi.array().items(Joi.string().required()).optional(), // Assuming relatedCategory is an array of ObjectIDs as strings and optional
  relatedSubCategory: Joi.array().items(Joi.string().required()).optional(), // Assuming relatedSubCategory is an array of ObjectIDs as strings and optional
  fieldType: Joi.string().valid("select", "checkbox", "radio").required(),
  options: Joi.array()
    .items(
      Joi.object({
        id: Joi.string().required(),
        name: Joi.string().required(),
        label: Joi.string().required(),
        value: Joi.string().required(),
      })
    )
    .required(),
  description: Joi.string().required(),
  images: Joi.array().items(Joi.string().required()).required(), // Assuming images are array of ObjectIDs as strings and optional
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
