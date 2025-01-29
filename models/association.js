const applyAssociations = (db) => {
  const { User, Post } = db;

  User.hasOne(Post, { foreignKey: "user_id" });
  Post.belongsTo(User, { foreignKey: "user_id" });
};

module.exports = applyAssociations;
