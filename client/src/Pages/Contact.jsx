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
    <section className="min-h-screen bg-black text-white px-6 pt-32 pb-20 font-inter">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-bold font-poppins mb-6 leading-tight">
            Let's create <br />
            <span className="text-gray-500">something</span> <span className="text-yellow-300">iconic.</span>
          </h2>
          <div className="flex flex-col md:flex-row md:items-center gap-4 text-gray-400">
            <p>Drop me a line directly:</p>
            <div className="flex items-center gap-4">
              <a
                href={mailtoLink}
                className="text-white hover:text-yellow-300 transition-colors text-lg border-b border-white/20 hover:border-yellow-300 pb-0.5"
              >
                askjaisal@gmail.com
              </a>
              <button
                onClick={copyEmail}
                className="text-xs border border-white/20 px-3 py-1.5 rounded-full hover:bg-white hover:text-black transition-all"
              >
                Copy
              </button>
            </div>
          </div>
        </div>

        {/* 📬 Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-yellow-300 transition-colors placeholder:text-gray-700 text-white"
              />
            </div>
            <div className="group">
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-yellow-300 transition-colors placeholder:text-gray-700 text-white"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group">
              <input
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Where are you based?"
                className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-yellow-300 transition-colors placeholder:text-gray-700 text-white"
              />
            </div>
            <div className="group">
              <input
                name="position"
                value={formData.position}
                onChange={handleChange}
                placeholder="Role / Purpose"
                className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-yellow-300 transition-colors placeholder:text-gray-700 text-white"
              />
            </div>
          </div>

          <div className="group pt-6">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows="4"
              required
              className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-yellow-300 transition-colors placeholder:text-gray-700 text-white resize-none"
            />
          </div>

          <div className="pt-8 flex items-center justify-between">
            <button
              type="submit"
              className="group flex items-center gap-2 md:gap-3 bg-white text-black px-5 py-2.5 text-sm md:px-8 md:py-4 md:text-lg rounded-full font-medium hover:bg-yellow-300 transition-all duration-300"
            >
              <span>Send Message</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </button>
            
            {status && (
              <span className={`text-sm ${status.includes("success") ? "text-green-400" : "text-red-400"}`}>
                {status}
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
