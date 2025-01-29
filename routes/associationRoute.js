const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/one-to-one", userController.oneToOne);
router.get("/belongsTo", userController.belongsTo);
router.get("/one-to-many", userController.oneToMany);
router.get("/many-to-many", userController.ManyToMany);

module.exports = router;
