const { ObjectId } = require("mongoose").Types;
const { name } = require("./model");

const getQuery = (payload) => {
  const subQueries = [{}];
  let query = {};
  let roleQuery = {};
  if (payload.roleId) {
    roleQuery = { roleId: new ObjectId(payload.roleId) };
    subQueries.push(roleQuery);
  }

  let nameQuery = [];
  if (payload.name) {
    nameQuery = {
      $or: [
        { roleAlias: { $regex: payload.name, $options: "i" } },
        { resourceAlias: { $regex: payload.name, $options: "i" } },
        { roleName: { $regex: payload.name, $options: "i" } },
        { resourceName: { $regex: payload.name, $options: "i" } },
      ],
    };
    subQueries.push(nameQuery);
  }

  query = {
    $and: [...subQueries],
  };
  return query;
};

module.exports = {
  getQuery,
  modelName: name,
};
