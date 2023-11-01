// eslint-disable-next-line no-unused-vars
const { default: mongoose } = require("mongoose");
const { NotFound } = require("../common/errors");
const {
  getById,
  search,
  count,
  save,
  update,
  deleteById,
} = require("./repository");

const getByIdHandler = async (req, res, next) => {
  try {
    const ModelName = req.modelName;
    const { id, populate } = req.query;
    const item = await getById(id, ModelName, populate);
    if (item) {
      return res.status(200).send(item);
    }
    throw new NotFound(`${ModelName} not found by the id: ${id}`);
  } catch (error) {
    return next(error, req, res);
  }
};

const searchHandler = async (req, res, next) => {
  try {
    const { limit, populate } = req.body;
    const ModelName = req.modelName;
    const { body } = req;
    req.log.info({ body }, `search ${ModelName}`);
    const data = await search(
      body,
      req.searchQuery,
      ModelName,
      limit,
      populate
    );
    return res.status(200).send({ data, total: data.length });
  } catch (error) {
    return next(error, req, res);
  }
};

const countHandler = async (req, res, next) => {
  try {
    const ModelName = req.modelName;
    const { body } = req;
    req.log.info({ body }, `count ${ModelName}`);
    const result = await count(req.searchQuery, ModelName);
    const response = { success: true, total: result };
    return res.status(200).send(response);
  } catch (error) {
    return next(error, req, res);
  }
};

const saveHandler = async (req, res, next) => {
  try {
    const ModelName = req.modelName;
    const { body } = req;
    let images = [];
    if (req.files) {
      // If there are files in req.files, add them to the images array
      images = req.files.map((file) => file.path.replace("public\\", ""));
      body.images = images;
    }
    // Check if the "location" field is a valid JSON string
    if (body.location) {
      try {
        body.location = JSON.parse(body.location);
      } catch (err) {
        // Handle parsing errors, e.g., if "location" is not a valid JSON string
        console.error("Error parsing location:", err);
        // You can choose to handle the error in any way you prefer
      }
    }
    const id = await save(body, ModelName);
    req.log.info({ id }, `${ModelName} created`);
    return res
      .status(201)
      .send({ success: true, message: `${ModelName} created` });
  } catch (error) {
    return next(error, req, res);
  }
};

const updateHandler = async (req, res, next) => {
  try {
    const ModelName = req.modelName;
    const { body } = req;
    console.log(req.socket.remoteAddress, "this is ip address");

    await update(body, ModelName);
    return res
      .status(200)
      .send({ success: true, message: `${ModelName} updated` });
  } catch (error) {
    return next(error, req, res);
  }
};

const deleteHandler = async (req, res, next) => {
  try {
    const ModelName = req.modelName;
    const { id } = req.query;
    await deleteById(id, ModelName);
    return res
      .status(200)
      .send({ success: true, message: `${ModelName} deleted` });
  } catch (error) {
    return next(error, req, res);
  }
};

// export
module.exports = {
  getByIdHandler,
  searchHandler,
  countHandler,
  saveHandler,
  updateHandler,
  deleteHandler,
};
