const globalErrorHandler = (error, req, res, next) => {
  if (error.message.includes("validation failed")) {
    error.statusCode = 400;
    error.message = "Please enter a valid name";
  }
  error.statusCode = error.statusCode || 500;
  error.status = error.status || "Error";

  res.status(error.statusCode).json({
    status: error.status,
    Error: {
      message: error.message,
    },
  });
};

module.exports = globalErrorHandler;
