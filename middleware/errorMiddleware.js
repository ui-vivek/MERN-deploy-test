const errorResponce = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  //mongoose cast error
  if (error.name === "castError") {
    const message = "Resources Not Found.";
    error = new errorResponce(message, 404);
  }
  //duplicate key error
  if (error.code === 11000) {
    const message = "Duplicate failed value entered";
    error = new errorResponce(message, 404);
  }

  //mongoose validation
  if (error.name === "validationError") {
    const message = Object.values(error.errors).map((val) => val.message);
    error = new errorResponce(message, 400);
  }
  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};

module.exports = errorHandler;
