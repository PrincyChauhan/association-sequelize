const { Post, User, Tag, Image, Video, Comment } = require("../models");

const oneToOne = async (req, res) => {
  let data = await User.findAll({
    attributes: ["name", "email"],
    include: {
      model: Post,
      attributes: ["title", ["name", "postName"]],
    },
    where: { id: 2 },
  });
  res.json(data);
};

const belongsTo = async (req, res) => {
  let data = await Post.findAll({
    attributes: ["title", "content"],
    include: [
      {
        model: User,
        attributes: ["name", "email"],
      },
    ],
  });
  res.json(data);
};

const oneToMany = async (req, res) => {
  let data = await User.findOne({
    attributes: ["name", "email"],
    include: [
      {
        model: Post,
        attributes: ["title", ["name", "postName"]],
      },
    ],
    where: { id: 1 },
  });
  res.json(data);
};

const ManyToMany = async (req, res) => {
  //   post to tag
  let data = await Post.findAll({
    attributes: ["title", "content"],
    include: [
      {
        model: Tag,
        attributes: ["name"],
      },
    ],
  });
  res.json(data);
  //   tag to post
  //   let data = await Tag.findAll({
  //     include: [
  //       {
  //         model: Post,
  //         attributes: ["title"],
  //       },
  //     ],
  //   });
};

const poylmorphic = async (req, res) => {
  // image to comment
  //   let data = await Image.findAll({
  //     include: [
  //       {
  //         model: Comment,
  //       },
  //     ],
  //   });

  //   video to comment
  //   let data = await Video.findAll({
  //     include: [
  //       {
  //         model: Comment,
  //       },
  //     ],
  //   });
  //comment too video/image

  let data = await Comment.findAll({
    include: [Image, Video],
  });
  res.json(data);
};

module.exports = { oneToOne, belongsTo, oneToMany, ManyToMany, poylmorphic };
