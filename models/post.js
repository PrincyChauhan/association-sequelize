const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Post = sequelize.define(
  "Post",
  {
    name: { type: DataTypes.STRING },
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
    user_id: { type: DataTypes.INTEGER },
  },
  {
    timestamps: false,
    tableName: "posts",
    createdAt: "created_at",
    updatedAt: "modified_at",
  }
);

module.exports = Post;
