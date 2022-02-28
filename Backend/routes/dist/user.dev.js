"use strict";

var express = require("express");

var router = express.Router();

var userCtrl = require("../controllers/user");

var multer = require("../middleware/multer-config");

router.get("/:id", userCtrl.findOneUser);
router.put("/:id", multer, userCtrl.modifyUser);
module.exports = router;