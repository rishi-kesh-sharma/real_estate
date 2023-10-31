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
    queries.push({ purpose: { $regex: payload.purpose, $options: "i" } });
  }

  // filter based on location
  if (payload.location) {
    // filter based on district
    if (payload.location.district) {
      queries.push({
        "location.district": {
          $regex: payload.location.district,
          $options: "i",
        },
      });
    }

    // filter based on province
    if (payload.location.province) {
      queries.push({
        "location.province": {
          $regex: payload.location.province,
          $options: "i",
        },
      });
    }

    // filter based on municipality
    if (payload.location.municipality) {
      queries.push({
        "location.municipality": {
          $regex: payload.location.municipality,
          $options: "i",
        },
      });
    }
    // filter based on ward
    if (payload.location.ward) {
      queries.push({ "location.ward": payload.location.ward });
    }

    // filter based on tole
    if (payload.location.tole) {
      queries.push({
        "location.tole": {
          $regex: payload.location.tole,
          $options: "i",
        },
      });
    }
  }
  // filter based on postal code
  if (payload.postalCode) {
    queries.push({ postalCode: { $regex: payload.postalCode, $options: "i" } });
  }

  // filter based on hasPrice
  if (payload.hasPrice === true || payload.hasPrice === false) {
    queries.push({ hasPrice: payload.hasPrice });
  }

  // filter based on isFeatured
  if (payload.isFeatured === true || payload.isFeatured === false) {
    queries.push({ isFeatured: payload.isFeatured });
  }

  // filter based on isSold
  if (payload.isSold === true || payload.isSold === false) {
    queries.push({ isSold: payload.isSold });
  }

  // filter based on the frunishing status
  if (payload.furnishingStatus) {
    queries.push({
      furnishingStatus: { $regex: payload.furnishingStatus, $options: "i" },
    });
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
    queries.push({ category: payload.category });
  }

  // filter based on sub category
  if (payload.subCategory) {
    queries.push({
      subCategory: payload.subCategory,
    });
  }

  // filter based on the rentFrequency
  if (payload.rentFrequency) {
    queries.push({
      rentFrequency: payload.rentFrequency,
    });
  }

  // filter based on ownership
  if (payload.ownership) {
    queries.push({ ownership: { $regex: payload.ownership, $options: "i" } });
  }

  // filter based on listed date range
  if (payload.listingDateRange) {
    const fromDate = payload.listingDateRange[0];
    let toDate = payload.listingDateRange[1];
    // Adjust toDate to the end of the day
    toDate = new Date(toDate);
    toDate.setHours(23, 59, 59, 999);
    queries.push({
      createdAt: { $gte: new Date(fromDate), $lte: toDate },
    });
  }

  // filter based on th area range
  if (payload.areaRange) {
    const fromArea = payload.areaRange[0];
    const toArea = payload.areaRange[1];

    queries.push({
      area: { $gte: fromArea, $lte: toArea },
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
