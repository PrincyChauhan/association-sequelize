const sequelize = require("../config/db");
const User = require("./user");
const Post = require("./post");
const applyAssociations = require("./association");

const db = { sequelize, User, Post };

// Apply associations after defining models
applyAssociations(db);

db.syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("All tables synced successfully!");
  } catch (err) {
    console.error("Error syncing database:", err);
  }
};

module.exports = db;
