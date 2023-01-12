const { Video } = require("../util/models");

module.exports = {
  getAllVids: async (req, res) => {
    try {
      let vids = await Video.findAll();
      res.status(200).send(vids);
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
