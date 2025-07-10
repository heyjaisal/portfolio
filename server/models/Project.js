const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  _id: String,
  title: String,
  description: String,
  features: [String],
  techStack: [String],
  imgSrc: String,
  githubLink: String,
  websiteLink: String,
});

module.exports = mongoose.model("Project", ProjectSchema);
