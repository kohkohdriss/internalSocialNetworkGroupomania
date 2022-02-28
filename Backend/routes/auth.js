const express = require("express")
const router = express.Router()
const authCtrl = require("../controllers/auth")
const authUser = require("../middleware/authUser");


router.post("/signup",authUser.checkPseudo,authUser.validEmail,authUser.validPassword,  authCtrl.signup)
router.post("/login",authUser.validEmail,authUser.validPassword, authCtrl.login)


module.exports = router