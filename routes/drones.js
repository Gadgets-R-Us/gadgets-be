const express = require("express");
const router = express.Router();

const drones = [
  {
    id: 1,
    name: "",
    color: "",
    price: 100,
    starCount: 1,
    reviewCount: 100,
    specifications: [""],
    longDescription: "",
  },
  {
    id: 2,
    name: "",
    color: "",
    price: 100,
    starCount: 1,
    reviewCount: 100,
    specifications: [""],
    longDescription: "",
  },
  {
    id: 3,
    name: "",
    color: "",
    price: 100,
    starCount: 1,
    reviewCount: 100,
    specifications: [""],
    longDescription: "",
  },
  {
    id: 4,
    name: "",
    color: "",
    price: 100,
    starCount: 1,
    reviewCount: 100,
    specifications: [""],
    longDescription: "",
  },
  {
    id: 5,
    name: "",
    color: "",
    price: 100,
    starCount: 1,
    reviewCount: 100,
    specifications: [""],
    longDescription: "",
  },
];

router.get("/", (req, res) => {
  res.json({
    data: drones,
    status: 200,
    statusMessage: "Success",
  });
});

module.exports = router;
