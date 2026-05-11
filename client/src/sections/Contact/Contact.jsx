import React, { useState } from "react";
import { sendMessage } from "../../api/contact";

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
      console.log("SENDING:", form);

      await sendMessage(form);

      alert("Message sent ✅");

      setForm({
        name: "",
        email: "",
        message: "",
      });

    } catch (err) {
      console.log(err);
      alert("Failed ❌");
    }
  };

  return (
    <section id="contact" className="bg-[#0a0a0a] text-white py-24 px-6">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact Me
          </h2>

          <p className="text-gray-400 mb-6 max-w-md">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>

          <div className="space-y-4 text-gray-300">
            <p>📧 junaid@email.com</p>
            <p>📍 Pune, India</p>
            <p>💼 Available for freelance</p>
          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
          
          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-xl outline-none focus:border-purple-500 text-sm"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-xl outline-none focus:border-purple-500 text-sm"
            />

            <textarea
              rows="4"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-xl outline-none focus:border-purple-500 text-sm"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition text-sm font-medium"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;