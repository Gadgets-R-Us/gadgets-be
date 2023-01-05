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
      "https://www.flickr.com/photos/197257531@N02/52607853984/in/dateposted-public/",
    items: "http://localhost:3001/drones",
  },
  {
    id: 2,
    category: "Scooters",
    description:
      "Prepare to amaze your friends with how super cool you are on one these sick electric scooters",
    profilePicture:
      "https://www.flickr.com/photos/197257531@N02/52607595801/in/dateposted-public/",
    items: [],
  },
  {
    id: 3,
    category: "Consoles",
    description:
      "Gaming - Classic hobby yet ever evolving. Go against your parents' and partner's advice and shop the latest consoles and technology here",
    profilePicture:
      "https://live.staticflickr.com/65535/52607095797_f7e102f167_n.jpg",
    items: [],
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

const router = require("./routes/drones");
app.use("/drones", router);

app.listen(3001);
