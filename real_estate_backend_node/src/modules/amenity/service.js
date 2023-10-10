const { ObjectId } = require("mongoose").Types;
const { name } = require("./model");

const getQuery = (payload) => {
  const subQueries = [{}];
  let categoryQuery = {};
  if (payload.categoryId) {
    categoryQuery = { relatedCategory: new ObjectId(payload.categoryId) };
    subQueries.push(categoryQuery);
  }
  let subCategoryQuery = {};
  if (payload.subCategoryId) {
    subCategoryQuery = {
      relatedSubCategory: new ObjectId(payload.subCategoryId),
    };
    subQueries.push(subCategoryQuery);
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
