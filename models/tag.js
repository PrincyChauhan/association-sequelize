const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Tag = sequelize.define(
  "Tag",
  {
    name: { type: DataTypes.STRING, allowNull: false },
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
    tableName: "tags",
  }
);

module.exports = Tag;
