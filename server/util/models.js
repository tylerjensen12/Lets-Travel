const { DataTypes } = require("sequelize");
const db = require("./database");

// const User = db.define('user', {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         allowNull: false,
//         autoIncrement: true
//     },
//     username: DataTypes.STRING({length: 20}),
//     password: DataTypes.STRING({length: 300}),
//     admin: DataTypes.BOOLEAN
// })

// const Video = db.define('video', {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         allowNull: false,
//         autoIncrement: true
//     },
//     url: DataTypes.STRING,
//     title: DataTypes.STRING,
//     description: DataTypes.STRING
// })

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
    ports: DataTypes.BOOLEAN
  }),
};
