const applyAssociations = (db) => {
  const { User, Post, Tag, Image, Video, Comment, Tag_taggable } = db;

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
  //   / ========== poylmorphic many to many -============

  // image to tag

  Image.belongsToMany(Tag, {
    through: {
      model: Tag_taggable,
      unique: false,
      scope: {
        taggableType: "image",
      },
    },
    foreignKey: "taggableId",
    constraints: false,
  });

  // tag to image

  Tag.belongsToMany(Image, {
    through: {
      model: Tag_taggable,
      unique: false,
      scope: {
        taggableType: "image",
      },
    },
    foreignKey: "taggableId",
    constraints: false,
  });

  // video to tag

  Video.belongsToMany(Tag, {
    through: {
      model: Tag_taggable,
      unique: false,
      scope: {
        taggableType: "video",
      },
    },
    foreignKey: "taggableId",
    constraints: false,
  });
  Tag.belongsToMany(Video, {
    through: {
      model: Tag_taggable,
      unique: false,
      scope: {
        taggableType: "video",
      },
    },
    foreignKey: "taggableId",
    constraints: false,
  });
};

module.exports = applyAssociations;
