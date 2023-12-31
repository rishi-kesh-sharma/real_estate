const Joi = require("joi");

const schema = Joi.object().keys({
  _id: Joi.string().optional(),
  name: Joi.string().required(),
  alias: Joi.string().required(),
  relatedPurpose: Joi.string().valid("rent", "sale").required(),
  relatedCategories: Joi.array().items(Joi.string().required()).optional(),
  relatedSubCategories: Joi.array().items(Joi.string().required()).optional(),
  // fieldType: Joi.string().valid("select", "checkbox", "radio").required(),
  // options: Joi.array()
  //   .items(
  //     Joi.object({
  //       id: Joi.string().required(),
  //       name: Joi.string().required(),
  //       label: Joi.string().required(),
  //       value: Joi.string().required(),
  //     })
  //   )
  //   .required(),
  description: Joi.string().required(),
  // images: Joi.array().items(Joi.string().required()).required(),
  images: Joi.array().items(Joi.string().required()).optional(),
});

const validate = (data, user) => {
  const tempData = { ...data };
  if (typeof tempData.relatedCategories === "string") {
    try {
      tempData.relatedCategories = JSON.parse(tempData.relatedCategories);
    } catch (error) {
      // Handle any parsing errors here
      throw new Error("Error parsing 'relatedCategories' property as JSON");
    }
  }
  if (typeof tempData.relatedSubCategories === "string") {
    try {
      tempData.relatedSubCategories = JSON.parse(tempData.relatedSubCategories);
    } catch (error) {
      // Handle any parsing errors here
      throw new Error("Error parsing 'relatedSubCategories' property as JSON");
    }
  }

  const result = schema.validate(tempData);
  result.value = {
    ...tempData,
    createdBy: user.id,
    updatedBy: user.id,
  };
  return result;
};

module.exports = { validate };
