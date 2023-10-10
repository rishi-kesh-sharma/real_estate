const { ObjectId } = require("mongoose").Types;
const { name } = require("./model");

const getQuery = (payload) => {
  let query = {};
  if (payload.name) {
    query = {
      $or: [
        { name: { $regex: payload.name, $options: "i" } },
        { email: { $regex: payload.name, $options: "i" } },
        { subject: { $regex: payload.name, $options: "i" } },
        { phone: { $regex: payload.name, $options: "i" } },
      ],
    };
  }
  return query;
};
module.exports = {
  getQuery,
  modelName: name,
};
