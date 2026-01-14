const Project = require("../models/Project");
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.createProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json({ success: true, data: project });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

exports.sendContactEmail = async (req, res) => {
  const { name, email, location, position, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.MY_EMAIL, // Your email
      reply_to: email, // Reply to the person who filled the form
      subject: `New Contact Message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ message: "Email sent successfully", data });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
};
