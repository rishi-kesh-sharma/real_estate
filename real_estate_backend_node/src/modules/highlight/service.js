/* eslint-disable no-undef */
const { name } = require("./model");

const getQuery = (payload) => {
  const subQueries = [{}];
  // filter based on category
  if (payload.relatedCategories) {
    queries.push({ relatedCategories: payload.relatedCategories });
  }

  // filter based on sub category
  if (payload.relatedSubCategories) {
    queries.push({
      relatedSubCategories: payload.relatedSubCategories,
    });
  }
  let nameQuery = [];
  if (payload.name) {
    nameQuery = {
      $or: [
        { alias: { $regex: payload.name, $options: "i" } },
        { name: { $regex: payload.name, $options: "i" } },
        { relatedPurpose: { $regex: payload.name, $options: "i" } },
        { fieldType: { $regex: payload.name, $options: "i" } },
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
