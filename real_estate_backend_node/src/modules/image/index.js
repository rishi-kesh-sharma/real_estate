const routes = require("./controller");
const { authenticateRequest } = require("../../common/middlewares");

const init = async (app) => {
  app.use("/api/upload", routes);
  return app;
};

module.exports = { init };
