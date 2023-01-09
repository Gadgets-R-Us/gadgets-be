const express = require("express");
const router = express.Router();
const drones = [
  {
    id: 1,
    name: "DJI - Mini 3 Fly More",
    image: "https://live.staticflickr.com/65535/52608085940_80399cf7e4.jpg",
    color: "Gray",
    price: 859.99,
    starCount: 5,
    reviewCount: 37,
    flightDuration: 38,
    specifications: [
      "Built-in Screen",
      "Integrated 4k Camera",
      "Integrated GPS",
      "Level 5 Wind Resistance",
      "Lightweight & Compact",
    ],
    longDescription:
      "A compact, foldable design weighing under 249 g makes DJI Mini 3 a great companion on any outing. Capture in 4K HDR, and with an extended battery life of up to 40 minutes, you can capture your surroundings in stunning detail without worrying about low battery.",
  },
  {
    id: 2,
    name: "DJI - Mavic 3 Classic",
    image: "http://localhost:3001/images/drones/mavic3.png",
    color: "Gray",
    price: 1749.99,
    starCount: 5,
    reviewCount: 102,
    flightDuration: 46,
    specifications: [
      "Omnidirectional obstacle sensing",
      "Built-in Screen",
      "Integrated 4k Camera",
      "Integrated GPS",
      "Free Shutterfly photo book",
    ],
    longDescription:
      "With powerful flight performance and a Hasselblad camera, Mavic 3 Classic delivers the absolute essence of flagship imaging. Take it on any adventure to create unforgettable work.",
  },
  {
    id: 3,
    name: "Autel Robotics - EVO",
    image: "http://localhost:3001/images/drones/autelEvo.png",
    color: "Orange",
    price: 799.99,
    starCount: 4,
    reviewCount: 15,
    flightDuration: 30,
    specifications: [
      "High-speed",
      "4 miles of range",
      "Intelligent flight system",
      "Ultrasonic sensors",
      "Integrated 4k and GPS",
    ],
    longDescription:
      "Capture video from the air using this orange Autel Robotics EVO quadcopter drone. The full-color video panel on the controller gives you a real-time view of the terrain below, and the four propellers let you precisely maneuver the drone into position over your subject. This Autel Robotics EVO quadcopter drone folds into a compact configuration for storage.",
  },
  {
    id: 4,
    name: "Vantop - Snaptain SP7100S",
    image: "http://localhost:3001/images/drones/clearVantop.png",
    color: "Black",
    price: 299.99,
    starCount: 3,
    reviewCount: 61,
    flightDuration: 25,
    specifications: [
      "Beginner friendly",
      "Safe and easy",
      "Return to home",
      "Waypoint navigation",
      "Integrated 4k and GPS",
    ],
    longDescription:
      "Our most advanced drone, the SP7100S, includes a 4K camera for capturing clear images from various angles. When you lose signal, the battery runs low, or you press the Return to Home button, this drone will automatically return to its starting points.",
  },
  {
    id: 5,
    name: "Vivitar - Sky Hawk",
    image: "http://localhost:3001/images/drones/vivitar.png",
    color: "Plain",
    price: 149.99,
    starCount: 2,
    reviewCount: 5,
    flightDuration: 16,
    specifications: [
      "Cheap",
      "Beginner friendly",
      "Stable and versatile",
      "Omnidirectional obstacle sensing",
    ],
    longDescription:
      "We combine a compact and functional design with a sturdy build and GPS functionality to bring you a 1080p drone camera to help you take beautiful aerial videos and photos anytime you want while streaming them directly to your phone through the mobile app for convenient use.",
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
