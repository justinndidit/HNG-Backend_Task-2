const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const router = require("./routes/personRoute");
const globalErrorHandler = require("./controllers/errorController");

//middleware

app.use(express.json());
app.use("/api", router);
app.use("*", (req, res) => {
  res
    .status(404)
    .json({ status: "Failed", Error: { message: "Route not found" } });
});
app.use(globalErrorHandler);

module.exports = app;
