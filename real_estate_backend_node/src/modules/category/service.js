const { ObjectId } = require("mongoose").Types;
const { name } = require("./model");

const getQuery = (payload) => {
  let query = {};
  if (payload.name) {
    query = {
      $or: [
        { alias: { $regex: payload.name, $options: "i" } },
        { name: { $regex: payload.name, $options: "i" } },
      ],
    };
  }
  return query;
};

module.exports = {
  getQuery,
  modelName: name,
};
