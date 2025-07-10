const express = require("express");
const { sendContactEmail } = require("../controllers/project.controller");
const router = express.Router();

router.post("/", sendContactEmail);

module.exports = router;
