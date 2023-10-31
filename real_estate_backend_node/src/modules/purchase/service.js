// load repository.js
const { name: ModelName } = require("./model");

const getQuery = (payload) => {
  const queries = [{}];
  // filter based on category
  if (payload.property) {
    queries.push({ property: payload.property });
  }

  // filter based on sub category
  if (payload.user) {
    queries.push({
      user: payload.user,
    });
  }

  let query = {};
  if (queries.length === 1) {
    query = { ...queries[0] };
  }
  if (queries.length > 1) {
    query = { $and: queries };
  }
  return query;
};

// const setupEventListeners = () => {
//   eventEmitter.on(`${ModelName}Created`, (model) => {
//     console.log(`${ModelName} created`, model);
//   });
//   eventEmitter.on(`${ModelName}Updated`, (model) => {
//     console.log(`${ModelName} updated`, model);
//   });
//   eventEmitter.on(`${ModelName}Deleted`, (model) => {
//     console.log(`${ModelName} deleted`, model);
//   });
// };

// setupEventListeners();

module.exports = {
  getQuery,
  ModelName,
};
