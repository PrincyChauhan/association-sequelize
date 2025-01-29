const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Video = sequelize.define(
  "Video",
  {
    title: { type: DataTypes.STRING, allowNull: false },
    text: { type: DataTypes.STRING, allowNull: false },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
  },
  {
    timestamps: true,
    tableName: "videos",
  }
);

module.exports = Video;
