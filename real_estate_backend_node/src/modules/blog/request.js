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

const validate = (data) => {
  const tempData = { ...data };

  if (typeof tempData.meta_tag === "string") {
    try {
      tempData.meta_tag = JSON.parse(tempData.meta_tag);
    } catch (error) {
      // Handle any parsing errors here
      throw new Error("Error parsing 'meta_tag' property as JSON");
    }
  }
  if (typeof tempData.tags === "string") {
    try {
      tempData.tags = JSON.parse(tempData.tags);
    } catch (error) {
      // Handle any parsing errors here
      throw new Error("Error parsing 'tags' property as JSON");
    }
  }
  if (typeof tempData.keywords === "string") {
    try {
      tempData.keywords = JSON.parse(tempData.keywords);
    } catch (error) {
      // Handle any parsing errors here
      throw new Error("Error parsing 'keywords' property as JSON");
    }
  }
  console.log(tempData, "this is tempdata ");
  const result = schema.validate(tempData);
  return result;
};

module.exports = { validate };
