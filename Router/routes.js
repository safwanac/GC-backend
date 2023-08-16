const express = require("express");
const usercreate = require("../Controller/register");

const router = express.Router();

router.route("/register").post(usercreate);

module.exports = router;
