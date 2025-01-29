const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define(
  "User",
  {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    gender: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: false,
    tableName: "users",
    createdAt: "created_at",
    updatedAt: "modified_at",
  }
);

module.exports = User;
