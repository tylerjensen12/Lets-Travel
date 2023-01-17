const { Video } = require("../util/models");

module.exports = {
  getAllVids: async (req, res) => {
    try {
      const vids = await Video.findAll({
        order: [["id", "DESC"]],
      });
      res.status(200).send(vids);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  adventureVideo: async (req, res) => {
    try {
      const advVid = await Video.findAll({
        where: { adventure: "adventure" },
        order: [["id", "DESC"]],
      });
      res.status(200).send(advVid);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  portVideo: async (req, res) => {
    try {
      const portVid = await Video.findAll({
        where: { ports: "port" },
        order: [["id", "DESC"]],
      });
      res.status(200).send(portVid);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  newVideo: async (req, res) => {
    try {
      const { url, title, description, adventure, ports } = req.body;
      await Video.create({
        url: url.replace("watch?v=", "embed/"),
        title,
        description,
        adventure,
        ports,
      });
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
