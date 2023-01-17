const express = require("express");
const cors = require("cors");
const db = require("./util/database");
const { User, Video } = require("./util/models");
const seed = require("./util/seed");
const {getAllVids, newVideo, portVideo, adventureVideo} = require('./controllers/video')
const {register, login} = require('./controllers/user')
const {addTrip} = require('./controllers/trip')

const server = express();

server.use(express.json());
server.use(cors());

User.hasMany(Video);
Video.belongsTo(User);

server.get('/api/allvideos', getAllVids)
server.get('/api/advvideos', adventureVideo)
server.get('/api/portvideos', portVideo)
server.post('/api/newvideo', newVideo)
server.post("/api/register", register);
server.post("/api/login", login);
server.post('/api/addtrip', addTrip)

db
// .sync()
// .sync({force: true})
// .then(() => seed());

const {PORT} = process.env
server.listen(PORT, () => console.log(`Server is running on ${PORT}`))