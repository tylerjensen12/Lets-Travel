const { Trip } = require("../util/models");

module.exports = {
  addTrip: async (req, res) => {
    try {
      const { date, ship, length, place } = req.body;
      await Trip.create({
        date,
        ship,
        length,
        place,
      });
    } catch (err) {
      res.status(400).send(err);
    }
  },
  getTrip: async (req, res) => {
    try {
      const trips = await Trip.findAll({
        order: [["date", "ASC"]],
      });
      res.status(200).send(trips);
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
