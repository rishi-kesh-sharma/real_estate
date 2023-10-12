const { ObjectId } = require("mongoose").Types;
const { name } = require("./model");

const getQuery = (payload) => {
  console.log(payload);
  let query = {};
  if (payload.name) {
    query = {
      $or: [
        { name: { $regex: payload.name, $options: "i" } },
        { alias: { $regex: payload.name, $options: "i" } },
      ],
    };
  }
  return query;
};

module.exports = {
  getQuery,
  modelName: name,
};
