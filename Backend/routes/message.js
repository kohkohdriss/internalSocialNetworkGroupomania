const express = require("express")
const router = express.Router()
const messageCtrl = require("../controllers/message")
const multer = require("../middleware/multer-config")
const isOwner = require("../middleware/isOwner")

router.get("/", messageCtrl.findAllMessages)
router.get("/users/:id", messageCtrl.findAllMessagesForOne)
router.get("/:id", messageCtrl.findOneMessage)
router.post("/", multer, messageCtrl.createMessage)
router.put("/:id",isOwner, multer, messageCtrl.modifyMessage)
router.delete("/:id",isOwner, messageCtrl.deleteMessage)

module.exports = router