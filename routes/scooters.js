const express = require("express");
const scooterRoute = express.Router();

const scooters = [
  {
    id: 1,
    name: "OKAI - NEON Pro",
    color: "Black",
    price: 749.99,
    starCount: 4,
    reviewCount: 15,
    range: 50,
    topSpeed: 20,
    specifications: [
      "Customizable LED light bar",
      "LCD screen",
      "App connectivity",
      "Conquers gradients up to 25%",
      "Best selling product",
    ],
    longDescription:
      "An important step in reducing carbon emissions is converting our dependency on driving to greener alternatives. With the new OKAI NEON Pro, the highest performer yet among the OKAI Neon series e-scooters, you'll feel good about your choice of transportation for your daily commute. The OKAI Neon Pro delivers an exceptional 50-mile long range thanks to its Samsung 21700 Lithium Battery; its max power hits 700W and conquers 25% gradients and 20mph top speed. ",
  },
  {
    id: 2,
    name: "Segway - Super Scooter GT2",
    color: "Black",
    price: 3999.99,
    starCount: 5,
    reviewCount: 357,
    range: 56,
    topSpeed: 44,
    specifications: [
      "0-30 MPH in 4 seconds",
      "6 different ride modes",
      "Intense stopping power",
      "Battery cooling system",
      "Tubeless tires",
    ],
    longDescription:
      "Meet the reinvented Electric KickScooter powered by Segway. Inspired by the Mecha & Supercars, the Segway Electric KickScooter GT Series is our latest innovation that allows the rider to enjoy a furious speed with excellent stability and off-road capability thanks to the front/rear damper adjustable suspension.",
  },
  {
    id: 3,
    name: "NIU - KQi3 Max",
    color: "Space Gray",
    price: 999.99,
    starCount: 3,
    reviewCount: 14,
    range: 40,
    topSpeed: 24,
    specifications: [
      "Smart Niu app",
      "Sick uphill performance",
      "Maximum comfort and stability",
      "4 riding modes",
      "Super duper braking power",
    ],
    longDescription:
      "The KQi3 Max: Maximum Performance, Maximum Thrill. That means an unlockable top speed of 23.6 mph and a range of more than 40 miles powered by a 450W rear wheel drive motor that easily conquers slopes of up to 25%. Dual disc brakes with regenerative braking and self-healing pneumatic tires ensure nothing stops your ride but you.",
  },
  {
    id: 4,
    name: "Unagi - The Model One E500",
    color: "Matte black",
    price: 589.99,
    starCount: 4,
    reviewCount: 49,
    range: 16,
    topSpeed: 19,
    specifications: [
      "Front and rear suspension system",
      "Weight capacity of 275",
      "Two 250W electric motors",
      "Motor monitoring system",
      "Aluminum and carbon fiber construction",
    ],
    longDescription:
      "Enjoy an exciting ride with this Unagi Model One E500 electric scooter. The dual 250W motors with 1,000 watts of peak power helps you power through hilly terrains, while the folding design and ultralight materials provide enhanced portability. This Unagi Model One electric scooter features a 275-lb. weight capacity to accommodate adult riders and speeds of up to 19 mph provide an adrenaline rush.",
  },
  {
    id: 5,
    name: "Hover1 - Jive Electric",
    color: "White",
    price: 399.99,
    starCount: 3,
    reviewCount: 33,
    range: 16,
    topSpeed: 14,
    specifications: [
      "Beginner friendly",
      "LED baseboard",
      "LCD display",
      "Built-in suspension",
      "Foot brake",
    ],
    longDescription:
      "Ready to take your ride to a new level?! Introducing the Hover-1 Jive. This exciting eScooter is the epitome of rideable technology. Featuring a powerful 300W brushless motor, a max range of 16 miles, and 14mph top speeds, the Jive gives you a smooth and soaring ride with all the bells and whistles you could ask for – including an LED light, LED Footpad, an LCD display, and a foldable frame for maximum portability. Equipped with 8.5” tires, and a strong frame capable of supporting 264lbs of weight at a 15-degree incline with ease. ",
  },
];

scooterRoute.get("/", (req, res) => {
  res.json({
    data: scooters,
    status: 200,
    statusMessage: "Success",
  });
});

module.exports = scooterRoute;
