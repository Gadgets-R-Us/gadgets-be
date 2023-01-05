const express = require("express");
const consoleRoute = express.Router();

const consoles = [
  {
    id: 1,
    name: "PlayStation 5",
    price: 499.99,
    starCount: 5,
    reviewCount: 26446,
    specifications: [
      "Stunning game graphics",
      "Integrated I/O",
      "Ultra-high speed SSD",
      "Adaptive triggers",
      "120 fps with 120Hz output",
    ],
    longDescription:
      "The PS5 console unleashes new gaming possibilities that you never anticipated. Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio*, and an all-new generation of incredible PlayStation games.",
  },
  {
    id: 2,
    name: "Xbox Series X",
    price: 499.99,
    starCount: 5,
    reviewCount: 22853,
    specifications: [
      "12 teraflops of raw graphic processing power",
      "Xbox live included",
      "Forza Horizon 5 included",
      "1TB of data",
      "Graphics almost as good as PS5",
    ],
    longDescription:
      "Xbox Series X, the fastest, most powerful Xbox ever. Explore rich new worlds with 12 teraflops of raw graphic processing power, DirectX ray tracing, a custom SSD, and 4K gaming. Make the most of every gaming minute with Quick Resume, lightning-fast load times, and gameplay of up to 120 FPS—all powered by Xbox Velocity Architecture. Enjoy thousands of games from four generations of Xbox, with hundreds of optimized titles that look and play better than ever.",
  },
  {
    id: 3,
    name: "Nintendo Switch",
    price: 349.99,
    starCount: 5,
    reviewCount: 6264,
    specifications: [
      "Portable",
      "Transformable controller layouts",
      "Kid-friendly",
      "64GB internal storage",
      "OLED screen",
    ],
    longDescription:
      "Introducing the newest member of the Nintendo Switch family Play at home on the TV or on-the-go with a vibrant 7-inch OLED screen with the Nintendo Switch – OLED Model system. In addition to a new screen with vivid colors and sharp contrast, the Nintendo Switch – OLED Model includes a wide adjustable stand for more comfortable viewing angles, a dock with a wired LAN port for TV mode (LAN cable sold separately), 64GB of internal storage, and enhanced audio in Handheld and Tabletop modes using the system’s speakers. ",
  },
];

consoleRoute.get("/", (req, res) => {
  res.json({
    data: consoles,
    status: 200,
    statusMessage: "Success",
  });
});

module.exports = consoleRoute;
