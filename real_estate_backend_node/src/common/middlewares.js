const { ObjectId } = require("mongoose").Types;
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const { GeneralError } = require("./errors");
const { searchOne } = require("../core/repository");

const handleError = async (err, req, res, next) => {
  if (res?.headersSent) {
    return next(err);
  }

  let code = 500;
  if (err instanceof GeneralError) {
    code = err.getCode();
  }
  console.log(err);

  const correlationId = req?.headers["x-correlation-id"];
  req.log.error(err, { correlationId });
  return (
    res &&
    res.status(code).send({
      correlationId,
      message: err.message,
      status: "error",
      error: { ...err },
    })
  );
};

const handleRequest = async (req, res, next) => {
  let correlationId = req.headers["x-correlation-id"];
  if (!correlationId) {
    correlationId = uuidv4();
    req.headers["x-correlation-id"] = correlationId;
  }

  res.set("x-correlation-id", correlationId);
  req.log = req.log.child({ correlationId });
  req.log.info(`new request: ${req.method} ${req.url}`);
  return next();
};

const handleValidation = (validate) => (req, res, next) => {
  const result = validate(req?.body, req?.user);
  const isValid = result.error == null;
  if (isValid) {
    req.body = result.value;
    return next();
  }
  const { details } = result.error;
  const messages = details.map((e) => e.message);
  console.log(messages);
  const msg = messages.join(",");
  // throw new BadRequest(msg);
  return res.status(400).send({ status: "error", message: msg });
};

const authenticateRequest = async (req, res, next) => {
  let auth = req.headers.authorization;

  if (auth) {
    auth = auth.replace("Bearer ", "");
    jwt.verify(auth, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        const { stack, name, ...errorProps } = err;
        console.log(err);
        req.log.error({ ...errorProps, name }, "jwt token invalid");
        res.status(401).send({
          success: false,
          errorMessage: err.message || "Invalid token",
        });
      } else {
        req.user = decoded;
        req.log = req.log.child({ username: req.user.username });
        req.log.info(`Authenticated user ${req.user.username}`);
        next();
      }
    });
  } else {
    res.status(401).send({ error: "Unauthenticated request" });
  }
};

// authorize request
const authorizeRequest = async (req, res, next) => {
  const { user } = req;
  if (user) {
    const { username, roleId } = user;
    const permission = await searchOne(
      {
        roleId: new ObjectId(roleId),
        resourceName: req._parsedUrl.pathname,
        isAllowed: true,
      },
      "Permission"
    );
    if (permission) {
      req.log.info(`Authorized user ${username}`);
      return next();
    }
    req.log.error(
      `Unauthorized user ${username} for the resource ${req.originalUrl} with role ${roleId}`
    );
  }
  return res.status(403).send({
    error: "Unauthorized request",
    message: "Unauthorized",
    status: "error",
  });
};

const singleUploader = () => {
  const multer = require("multer");

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `public/images/${req.query.folder || ""}`);
    },
    filename: function (req, file, cb) {
      cb(
        null,
        new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
      ); // 23/08/2022
    },
  });
  // Specify file format that can be saved
  function fileFilter(req, file, cb) {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/svg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  }
  const upload = multer({ storage, fileFilter });
  // File Size Formatter
  return upload.single("image");
};

const multiUploader = (folder, name) => {
  const multer = require("multer");

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      console.log("folder");
      console.log(req.query.folder);
      console.log("folder");
      cb(null, `public/images/${req.query.folder || ""}`);
    },
    filename: function (req, file, cb) {
      cb(
        null,
        new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
      ); // 23/08/2022
    },
  });
  // Specify file format that can be saved
  function fileFilter(req, file, cb) {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/svg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  }
  const upload = multer({ storage, fileFilter });
  // File Size Formatter
  return upload.array("images");
};

module.exports = {
  handleError,
  handleRequest,
  handleValidation,
  authenticateRequest,
  authorizeRequest,
  singleUploader,
  multiUploader,
};
