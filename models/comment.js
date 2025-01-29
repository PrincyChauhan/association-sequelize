const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Comment = sequelize.define(
  "Comment",
  {
    title: { type: DataTypes.STRING, allowNull: false },
    commentableId: { type: DataTypes.INTEGER, allowNull: false },
    commentableType: { type: DataTypes.STRING, allowNull: false },
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
    tableName: "comments",
  }
);

module.exports = Comment;
