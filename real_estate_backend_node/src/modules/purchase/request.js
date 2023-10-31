const Joi = require("joi");

const schema = Joi.object().keys({
  _id: Joi.string().optional(),
  property: Joi.string().required(),
  user: Joi.string().required(),
});

const validate = (data) => {
  const tempData = { ...data };

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
