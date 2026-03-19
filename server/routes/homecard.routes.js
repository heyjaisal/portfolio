const express = require("express");
const { getHomeCards, createHomeCard, updateHomeCard, deleteHomeCard } = require("../controllers/homecard.controller");
const router = express.Router();

router.get("/", getHomeCards);
router.post("/", createHomeCard);
router.put("/:id", updateHomeCard);
router.delete("/:id", deleteHomeCard);

module.exports = router;
