const { ObjectId } = require("mongoose").Types;
const { name } = require("./model");

const getQuery = (payload) => {
  const queries = [];

  // filter based on name
  if (payload.title) {
    queries.push({ title: { $regex: payload.title, $options: "i" } });
  }

  // filter based on purpose
  if (payload.slugUrl) {
    queries.push({ slugUrl: { $regex: payload.slugUrl, $options: "i" } });
  }

  if (payload.tags) {
    const temp = payload?.tags?.map((tag) => new RegExp(tag, "i"));
    queries.push({ tags: { $in: temp } });
  }

  if (payload.metaTags) {
    const temp = payload.metaTags.map((tag) => new RegExp(tag, "i"));
    queries.push({ metaTags: { $in: temp } });
  }

  if (payload.keywords) {
    const temp = payload.keywords.map((tag) => new RegExp(tag, "i"));
    queries.push({ keywords: { $in: temp } });
  }

  if (payload.author) {
    queries.push({ author: payload.author });
  }

  // filter based on listed date range
  if (payload.listingDateRange) {
    const fromDate = payload.listingDateRange[0];
    const toDate = payload.listingDateRange[1];
    console.log(new Date(fromDate));
    console.log(toDate);
    console.log(payload.listingDateRange);
    queries.push({
      createdAt: {
        $gte: new Date(fromDate),
        $lte: new Date(toDate || Date.now()),
      },
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

module.exports = {
  getQuery,
  modelName: name,
};
