import React, { useState } from "react";
import axiosInstance from "../utils/axios";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    position: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await axiosInstance.post("/contact", formData);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", location: "", position: "", message: "" });
    } catch (error) {
      setStatus("Failed to send. Try again.");
    }
  };

  const emailAddress = "askjaisal@gmail.com";
  const mailtoLink = `mailto:${emailAddress}?subject=Let's Work Together&body=Hi Jaisal,%0D%0A%0D%0AI saw your portfolio and would love to connect.%0D%0A`;

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setStatus("Email copied to clipboard!");
  };

  return (
    <section className="px-6 py-12 max-w-xl mx-auto pt-15">
      <h2 className="text-3xl font-bold mb-6">Let's Create Together</h2>

  
      <div className="mb-6 space-y-2 text-sm text-gray-600">
        <p>You can also reach me directly:</p>
        <div className="flex items-center space-x-4">
          <a
            href={mailtoLink}
            className="text-blue-600 underline hover:text-blue-800"
          >
            askjaisal@gmail.com
          </a>
          <button
            onClick={copyEmail}
            className="text-gray-500 hover:text-black transition text-xs border px-2 py-1 rounded"
          >
            Copy Email
          </button>
        </div>
      </div>

      {/* 📬 Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-3 border rounded"
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-3 border rounded"
        />
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Your Location"
          className="w-full p-3 border rounded"
        />
        <input
          name="position"
          value={formData.position}
          onChange={handleChange}
          placeholder="Position (e.g. MERN Full Stack)"
          className="w-full p-3 border rounded"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          required
          className="w-full p-3 border rounded"
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded hover:bg-yellow-300 hover:text-black transition"
        >
          Send Message
        </button>
        {status && <p className="mt-2 text-sm text-gray-700">{status}</p>}
      </form>
    </section>
  );
}
