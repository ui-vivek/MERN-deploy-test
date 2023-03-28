const chalk = require("chalk");
const userModel = require("../models/userModel");
const errorResponse = require("../utils/errorResponse");

//JWT TOKEN
exports.sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken(res);
  res.status(statusCode).json({
    success: true,
    token,
  });
};

//REGISTER
exports.registerController = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    //already existing user
    const existingEmail = await userModel.findOne({ email });
    if (existingEmail) {
      return next(new errorResponse("Email is already registered.", 409));
    }
    const user = await userModel.create({ username, email, password });
    this.sendToken(user, 201, res);
  } catch (error) {
    console.log(chalk.red.inverse(error));
    next(error);
  }
};

//LOGIN
exports.loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // validation
    if (!email || !password) {
      return next(new errorResponse("Please enter email and password."));
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return next(
        new errorResponse("Please enter valid email and password.", 401)
      );
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return next(new errorResponse("Invalid email or password.", 401));
    }
    //res
    this.sendToken(user, 200, res);
  } catch (error) {
    console.log(chalk.redBright.inverse(error));
    next(error);
  }
};

exports.logoutController = async (req, res) => {
  res.clearCookie("refreshToken");
  return res.status(200).json({
    success: true,
    message: "Logged out successfully.",
  });
};
