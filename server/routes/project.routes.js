const express = require("express");
const router = express.Router();
const { getProjectById, createProject } = require("../controllers/project.controller");


router.get("/:id", getProjectById);
router.post('/', createProject);

module.exports = router;
