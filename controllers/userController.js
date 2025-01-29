const { Post, User } = require("../models");

const oneToOne = async (req, res) => {
  let data = await User.findAll({
    include: {
      model: Post,
    },
    where: { id: 2 },
  });
  res.json(data);
};

module.exports = { oneToOne };
