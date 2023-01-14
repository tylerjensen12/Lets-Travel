const express = require("express");
const cors = require("cors");
const db = require("./util/database");
const { User, Video } = require("./util/models");
const seed = require("./util/seed");
const {getAllVids} = require('./controllers/video')
const {register, login} = require('./controllers/user')

const server = express();

server.use(express.json());
server.use(cors());

User.hasMany(Video);
Video.belongsTo(User);

server.get('/api/allvideos', getAllVids)
server.post("/api/register", register);
server.post("/api/login", login);

db
// .sync()
// .sync({force: true})
// .then(() => seed());

const {PORT} = process.env
server.listen(PORT, () => console.log(`Server is running on ${PORT}`))