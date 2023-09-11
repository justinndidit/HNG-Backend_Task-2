const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const router = require("./routes/personRoute");
const globalErrorHandler = require("./controllers/errorController");

//middleware

app.use(express.json());
app.use("/api", router);
app.use(globalErrorHandler);

module.exports = app;
