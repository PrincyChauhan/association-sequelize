const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const PostTag = sequelize.define(
  "PostTag",
  {
    postId: { type: DataTypes.INTEGER, allowNull: false },
    tagId: { type: DataTypes.INTEGER, allowNull: false },
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
    tableName: "posttags",
  }
);

module.exports = PostTag;
