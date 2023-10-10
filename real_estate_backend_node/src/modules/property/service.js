// load repository.js
const { name: ModelName } = require("./model");

const getQuery = (payload) => {
  const queries = [{}];

  // filter based on name
  if (payload.name) {
    queries.push({ name: { $regex: payload.name, $options: "i" } });
  }

  // filter based on purpose
  if (payload.purpose) {
    queries.push({ purpose: { $regex: payload.name, $options: "i" } });
  }

  // filter based on location
  if (payload.location) {
    // filter based on district
    if (payload.location.district) {
      queries.push({ "location.district": payload.location.district });
    }

    // filter based on province
    if (payload.location.province) {
      queries.push({ "location.province": payload.location.province });
    }

    // filter based on municipality
    if (payload.location.municipality) {
      queries.push({ "location.municipality": payload.location.municipality });
    }
    // filter based on ward
    if (payload.location.ward) {
      queries.push({ "location.ward": payload.location.ward });
    }

    // filter based on tole
    if (payload.location.tole) {
      queries.push({ "location.tole": payload.location.tole });
    }
  }

  // filter based on postal code
  if (payload.postalCode) {
    queries.push({ postalCode: { $regex: payload.postalCode, $options: "i" } });
  }

  // filter based on hasPrice
  if (payload.hasPrice) {
    queries.push({ hasPrice: payload.hasPrice });
  }

  // filter based on price range
  if (payload.priceRange) {
    const startingPrice = payload.priceRange[0];
    const endingPrice = payload.priceRange[1];
    queries.push({
      price: { $gte: new Date(startingPrice), $lte: new Date(endingPrice) },
    });
  }
  // filter based on category
  if (payload.category) {
    queries.push({ category: { $regex: payload.category, $options: "i" } });
  }
  // filter based on sub category
  if (payload.subCategory) {
    queries.push({
      subCategory: { $regex: payload.subCategory, $options: "i" },
    });
  }
  // filter based on ownership
  if (payload.ownership) {
    queries.push({ ownership: { $regex: payload.ownership, $options: "i" } });
  }

  // filter based on listed date range
  if (payload.listingDateRange) {
    const fromDate = payload.listingDateRange[0];
    const toDate = payload.listingDateRange[1];
    queries.push({
      createdAt: { $gte: new Date(fromDate), $lte: new Date(toDate) },
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
  ModelName: ModelName,
};
