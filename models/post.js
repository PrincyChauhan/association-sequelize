const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Post = sequelize.define(
  "Post",
  {
    name: { type: DataTypes.STRING },
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
    user_id: { type: DataTypes.INTEGER },
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
    tableName: "posts",
  }
);

module.exports = Post;
