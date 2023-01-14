const { DataTypes } = require("sequelize");
const db = require("./database");

module.exports = {
  User: db.define("user", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    username: DataTypes.STRING({ length: 20 }),
    password: DataTypes.STRING({ length: 300 }),
    admin: DataTypes.BOOLEAN,
  }),
  Video: db.define("video", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    url: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    adventure: DataTypes.BOOLEAN,
    ports: DataTypes.BOOLEAN,
  }),
  /*
  Picture:db.define("picture", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    url: DataTypes.STRING,
    title: DataTypes.STRING,
    */
};
