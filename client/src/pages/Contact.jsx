import React, { useState } from "react";
import { sendMessage } from "../api/contact";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendMessage(form);
      alert("✅ Message sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      alert("❌ Failed to send message");
    }
  };

  return (
    <section id="contact" className="py-20 text-white bg-black px-6">
      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl font-bold mb-6 text-center">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 bg-white/10 rounded-lg"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 bg-white/10 rounded-lg"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-3 bg-white/10 rounded-lg"
          />

          <button className="w-full py-3 bg-purple-600 rounded-lg">
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;