const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: String,
  year: String,
  tags: String,
  number: String,
  description: String,
  features: [String],
  techStack: [String],
  imgSrc: String,
  githubLink: String,
  websiteLink: String,
}, { timestamps: true });

module.exports = mongoose.model("Project", ProjectSchema);
