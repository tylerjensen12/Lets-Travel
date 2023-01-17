const {Trip} = require('../util/models')

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
};
