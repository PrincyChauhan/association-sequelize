const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Image = sequelize.define(
  "Image",
  {
    title: { type: DataTypes.STRING, allowNull: false },
    url: { type: DataTypes.STRING, allowNull: false },
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
    tableName: "images",
  }
);

module.exports = Image;
