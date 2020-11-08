var express = require('express');
var router = express.Router();

const {signupController, loginController} = require("../controllers/auth.controller");
const { userSignupValidator } = require('../validator');

router.post("/signup", userSignupValidator, signupController);
router.post("/login",  loginController);


module.exports = router;
