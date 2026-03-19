const mongoose = require("mongoose");

const HomeCardSchema = new mongoose.Schema({
  title: String,
  img: String,
}, { timestamps: true });

module.exports = mongoose.model("HomeCard", HomeCardSchema);
