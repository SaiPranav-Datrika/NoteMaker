const express= require('express');

const registeruser= require("../controllers/userControllers.js")

const router= express.Router();

router.route("/").post(registeruser);

module.exports = router;