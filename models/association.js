const applyAssociations = (db) => {
  const { User, Post, Tag } = db;

  //   =============== One to One===============
  //   User.hasOne(Post, { foreignKey: "user_id" });

  //  =============== One to Many===============

  User.hasMany(Post, { foreignKey: "user_id" });
  Post.belongsTo(User, { foreignKey: "user_id" });

  // ========== Many to Many ===================

  Post.belongsToMany(Tag, { through: "posttags" });
  Tag.belongsToMany(Post, { through: "posttags" });
};

module.exports = applyAssociations;
