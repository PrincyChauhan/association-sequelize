const { Post, User } = require("../models");

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

module.exports = { oneToOne };
