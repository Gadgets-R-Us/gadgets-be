const express = require("express");
const scooter = express.Router();

const scooters = [{ id: 1 }];

scooter.get("/", (req, res) => {
  res.json({
    data: scooters,
    status: 200,
    statusMessage: "Success",
  });
});

module.exports = scooter;
