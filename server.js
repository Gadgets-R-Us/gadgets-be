const express = require("express");
const cors = require("cors");
const app = express();

const categories = [
  {
    id: 1,
    category: "Drones",
    description:
      "Fact: As a human you will never be able to be a bird. That would be pretty sad if drones did not exist but they do. Choose from the best options here",
    profilePicture:
      "https://live.staticflickr.com/65535/52607853984_fc154a75c7_w.jpg",
    items: "http://localhost:3001/drones",
  },
  {
    id: 2,
    category: "Scooters",
    description:
      "Prepare to amaze your friends with how super cool you are on one these sick electric scooters",
    profilePicture:
      "https://live.staticflickr.com/65535/52607595801_15b8bce5bc_z.jpg",
    items: "http://localhost:3001/scooters",
  },
  {
    id: 3,
    category: "Consoles",
    description:
      "Gaming - Classic hobby yet ever evolving. Go against your parents' and partner's advice and shop the latest consoles and technology here",
    profilePicture:
      "https://live.staticflickr.com/65535/52607095797_f7e102f167_n.jpg",
    items: "http://localhost:3001/consoles",
  },
];

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.json({
    data: categories,
    status: 200,
    statusMessage: "Success",
  });
});

const droneRouter = require("./routes/drones");
app.use("/drones", droneRouter);

const scooterRouter = require("./routes/scooters");
app.use("/scooters", scooterRouter);

const consoleRouter = require("./routes/consoles");
app.use("/consoles", consoleRouter);

app.listen(3001);
