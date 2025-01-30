const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Tag_taggable = sequelize.define(
  "Tag_taggable",
  {
    tagId: { type: DataTypes.INTEGER, unique: "tt_unique_constraint" },
    taggableId: {
      type: DataTypes.INTEGER,
      unique: "tt_unique_constraint",
      references: null,
    },
    taggableType: {
      type: DataTypes.STRING,
      unique: "tt_unique_constraint",
    },
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
    tableName: "tag_taggables",
  }
);

module.exports = Tag_taggable;
