const sequelize = require("../config/db");
const User = require("./user");
const Post = require("./post");
const Tag = require("./tag");
const PostTag = require("./posttag");
const Image = require("./image");
const Comment = require("./comment");
const Video = require("./video");
const Tag_taggable = require("./tag_taggable");

const applyAssociations = require("./association");

const db = {
  sequelize,
  User,
  Post,
  Tag,
  PostTag,
  Image,
  Comment,
  Video,
  Tag_taggable,
};

// Apply associations after defining models
applyAssociations(db);

db.syncDatabase = async () => {
  try {
    await sequelize.sync({});
    // await sequelize.sync({ alter: true });

    console.log("All tables synced successfully!");
  } catch (err) {
    console.error("Error syncing database:", err);
  }
};

module.exports = db;
