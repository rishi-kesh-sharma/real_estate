const express = require("express");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const { ObjectId } = require("mongoose").Types;
const {
  handleValidation,
  authenticateRequest,
} = require("../../common/middlewares");
const {
  sendPasswordResetEmail,
  sendPasswordResetSuccessfulEmail,
} = require("../../email/sendgrid-service");
const { validateRegistration, validateUsername } = require("./request");
const {
  checkUser,
  searchOne,
  tryCreateUser,
  searchPermissions,
  update,
  changePassword,
} = require("./service");
const { sendAccountCreatedEmail } = require("../../email/sendgrid-service");

const router = express.Router();
const ModelName = "User";
const createUserHandler = async (req, res, next) => {
  try {
    const user = req.body;
    const role = await searchOne({ alias: "User", name: "user" }, "Role");
    user.roleId = role._id;
    user.roleAlias = role.alias;
    const id = await tryCreateUser(user);
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "User already exists by username or email or phone number.",
      });
    }
    const token = jwt.sign(
      {
        id,
        exp:
          Math.floor(Date.now() / 1000) +
          parseInt(process.env.JWT_EXPIRES_IN, 10),
      },
      process.env.JWT_SECRET
    );
    user.accountActivationToken = token;
    user._id = id;
    await update(user, ModelName);
    await sendAccountCreatedEmail(
      user.email,
      "real estate account created",
      token,
      user
    );

    return res
      .status(201)
      .send({ status: "ok", message: "User created successfully", id });
  } catch (error) {
    return next(error);
  }
};

// eslint-disable-next-line consistent-return
const loginHandler = async (req, res) => {
  if (req.body.username && req.body.password) {
    const user = await checkUser(req.body.username, req.body.password);
    if (user) {
      if (!user.isActive) {
        return res.status(400).send({
          status: "error",
          message: "User is not active",
        });
      }
      const permissions = await searchPermissions(user.roleId);
      const token = jwt.sign(
        {
          id: user._id,
          username: req.body.username,
          roleId: user.roleId,
          exp:
            Math.floor(Date.now() / 1000) +
            parseInt(process.env.JWT_EXPIRES_IN, 10),
        },
        process.env.JWT_SECRET
      );
      const { passwordHash, ...rest } = user;
      const payload = {
        status: "ok",
        type: "account",
        currentAuthority: "admin",
        user: rest,
        permissions,
        sessionId: uuidv4(),
        accessToken: token,
        // userInfo: {
        //   name: "Rishikesh Sharma",
        //   avatar:
        //     "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png",
        //   userid: "00000001",
        //   email: "wrongdirection72@gmail.com",
        //   signature: "Be tolerant to diversity, tolerance is a virtue",
        //   title: "interaction expert",
        //   group: "Rentify",
        //   tags: [],
        //   notifyCount: 12,
        //   unreadCount: 11,
        //   country: "China",
        //   access: "admin",
        //   geographic: {
        //     province: {
        //       label: "Bagmati",
        //       key: "330000",
        //     },
        //     city: {
        //       label: "Kathmandu",
        //       key: "330100",
        //     },
        //   },
        //   address: "Kathmandu",
        //   phone: "0752-268888888",
        // },
      };

      res.status(200).send(payload);
      // eslint-disable-next-line consistent-return
      return;
    }
  }

  res.status(400).send("Invalid username or password");
};

const forgotPasswordHandler = async (req, res) => {
  if (req.body.email) {
    const user = await searchOne({ email: req.body.email }, ModelName);
    if (user) {
      const token = jwt.sign(
        {
          id: user._id,
          exp:
            Math.floor(Date.now() / 1000) +
            parseInt(process.env.JWT_EXPIRES_IN, 10),
        },
        process.env.JWT_SECRET
      );
      user.passwordResetToken = token;
      await update(user, ModelName);
      await sendPasswordResetEmail(
        req.body.email,
        "BizBook365 Password reset",
        token
      );
      return res
        .status(200)
        .send({ status: "ok", message: "Email sent successfully" });
    }
  }

  return res.status(400).send({
    status: "error",
    message: "Email address not found.",
  });
};

const checkUsernameHandler = async (req, res) => {
  const user = await searchOne(
    { username: req.body.username.toLowerCase() },
    ModelName
  );
  if (user) {
    return res
      .status(400)
      .send({ status: "unavailable", message: "Username is taken" });
  }
  return res
    .status(200)
    .send({ status: "available", message: "Username is available" });
};

const verifyTokenHandler = async (req, res) => {
  const { token } = req.body;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await searchOne({ _id: decoded.id }, ModelName);
      if (user) {
        const tokenValid = token === user.passwordResetToken;
        if (tokenValid) {
          return res
            .status(200)
            .send({ status: "ok", message: "Token verified" });
        }
        return res
          .status(400)
          .send({ status: "error", message: "Token invalid" });
      }
    } catch (error) {
      return res.status(400).send({
        status: "error",
        message: "Invalid token",
      });
    }
  }
  return res.status(400).send({
    status: "error",
    message: "Invalid token",
  });
};

const resetPasswordHandler = async (req, res) => {
  const { token, password } = req.body;
  if (token && password) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await searchOne(
        { _id: new ObjectId(decoded.id) },
        ModelName
      );
      if (user) {
        const tokenValid = token === user.passwordResetToken;
        if (tokenValid) {
          await changePassword(user, password);
          await sendPasswordResetSuccessfulEmail(
            user.email,
            "BizBook365 Password reset successful"
          );
          return res
            .status(200)
            .send({ status: "ok", message: "Password changed successfully" });
        }
        return res
          .status(400)
          .send({ status: "error", message: "Token invalid" });
      }
    } catch (error) {
      return res.status(400).send({
        status: "error",
        message: "Invalid token",
      });
    }
  }
  return res.status(400).send({
    status: "error",
    message: "Invalid token",
  });
};

const activateAccountHandler = async (req, res) => {
  const { token } = req.body;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await searchOne({ _id: decoded.id }, ModelName);
      if (user) {
        const tokenValid = token === user.accountActivationToken;
        if (tokenValid) {
          user.accountActivationToken = null;
          user.isActive = true;
          await update(user, ModelName);
          return res.status(200).send({
            status: "ok",
            message: "Account is activated successfully",
          });
        }
        return res
          .status(400)
          .send({ status: "error", message: "Token invalid" });
      }
    } catch (error) {
      return res.status(400).send({
        status: "error",
        message: "Invalid token",
      });
    }
  }
  return res.status(400).send({
    status: "error",
    message: "Invalid token",
  });
};

const getLoggedInUser = async (req, res) => {
  const { user } = req;
  res.status(200).json(user);
};
const logout = async (req, res) => {
  const { user } = req;
  res.status(200).json({ message: "user logged out" });
};

router.post(
  "/register",
  handleValidation(validateRegistration),
  createUserHandler
);
router.post("/login", loginHandler);
router.post("/forgot-password", forgotPasswordHandler);
router.post("/verify-token", verifyTokenHandler);
router.post("/reset-password", resetPasswordHandler);
router.post("/activate-account", activateAccountHandler);
router.post(
  "/check-username",
  handleValidation(validateUsername),
  checkUsernameHandler
);
router.get("/getloggedinuser", authenticateRequest, getLoggedInUser);
router.get("/logout", authenticateRequest, logout);

module.exports = router;
