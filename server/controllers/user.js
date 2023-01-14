const { User } = require("../util/models");
const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    try {
      const { username, password } = req.body;
      const usernameCheck = await User.findOne({
        where: { username },
      });
      if (usernameCheck) {
        return res.status(400).send("Username already exists.");
      }
      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);

      const newAdmin = await User.create({
        username,
        password: hashPass,
        admin: false,
      });
    } catch (err) {
      console.error(err);
    }
  },
  login: async (req, res) => {
    const { username, password } = req.body;
    const usernameCheck = await User.findOne({
        where: {username}
    })
    if(usernameCheck){
        let authenticated = bcrypt.compareSync(password, usernameCheck.password)
        if(authenticated){
            return res.status(200).send(usernameCheck)
        }
        return res.status(400).send('Incorrect password')
    }
    return res.status(400).send('Incorrect username')
  },
};
