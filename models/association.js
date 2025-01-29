const applyAssociations = (db) => {
  const { User, Post, Tag, Image, Video, Comment } = db;

  //   =============== One to One===============
  //   User.hasOne(Post, { foreignKey: "user_id" });

  //  =============== One to Many===============

  User.hasMany(Post, { foreignKey: "user_id" });
  Post.belongsTo(User, { foreignKey: "user_id" });

  // ========== Many to Many ===================

  Post.belongsToMany(Tag, { through: "posttags" });
  Tag.belongsToMany(Post, { through: "posttags" });

  // =============Poylmorphic one to many==========

  Image.hasMany(Comment, {
    foreignKey: "commentableId",
    constraints: false,
    scope: { commentableType: "image" },
  });

  Video.hasMany(Comment, {
    foreignKey: "commentableId",
    constraints: false,
    scope: { commentableType: "video" },
  });

  Comment.belongsTo(Image, {
    foreignKey: "commentableId",
    constraints: false,
  });

  Comment.belongsTo(Video, {
    foreignKey: "commentableId",
    constraints: false,
  });
};

module.exports = applyAssociations;
