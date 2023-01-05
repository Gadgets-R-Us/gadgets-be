const express = require("express");
const consoleRoute = express.Router();

consoleRoute.get("/", (req, res) => {
  res.json({
    data: "",
    status: 200,
    statusMessage: "Success",
  });
});

module.exports = consoleRoute;
