"use strict";

var express = require("express");

var router = express.Router();

var messageCtrl = require("../controllers/message");

var multer = require("../middleware/multer-config");

var isOwner = require("../middleware/isOwner");

router.get("/", messageCtrl.findAllMessages);
router.get("/users/:id", messageCtrl.findAllMessagesForOne);
router.get("/:id", messageCtrl.findOneMessage);
router.post("/", multer, messageCtrl.createMessage);
router.put("/:id", isOwner, multer, messageCtrl.modifyMessage);
router["delete"]("/:id", isOwner, messageCtrl.deleteMessage);
module.exports = router;