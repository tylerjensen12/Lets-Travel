const express = require("express");
const cors = require("cors");
const db = require("./util/database");
const { User, Video } = require("./util/models");
const seed = require("./util/seed");

const server = express();

server.use(express.json());
server.use(cors());

User.hasMany(Video);
Video.belongsTo(User);

server.get("/api/user/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let info = await User.findOne({ where: { id } });
    res.status(200).send(info);
  } catch {
    res.status(400).send("could not complete");
  }
});

db
.sync()
// .sync({force: true})
// .then(() => seed());

server.listen(4000, () => console.log('Server is running on 4000'))