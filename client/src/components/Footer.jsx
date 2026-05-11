import React, { useState } from "react";
import { sendMessage } from "../api/contact";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    if (!email) return alert("Enter email");

    try {
      await sendMessage({
        name: "Footer User",
        email,
        message: "User contacted via footer",
      });

      alert("Message sent ✅");
      setEmail("");
    } catch (err) {
      console.log(err);
      alert("Failed ❌");
    }
  };

  return (
    <footer className="bg-[#0f0f1a] text-white px-6 py-16 border-t border-purple-500/20">
      
      <div className="max-w-7xl mx-auto">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-purple-400 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white transition cursor-pointer">
                junaid@email.com
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Terms & Conditions
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Let’s Connect
            </h3>

            <div className="flex gap-4 mt-4">
              
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-500/20 hover:scale-110 transition cursor-pointer">
                F
              </div>

              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-500/20 hover:scale-110 transition cursor-pointer">
                L
              </div>

              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-500/20 hover:scale-110 transition cursor-pointer">
                T
              </div>

            </div>
          </div>

        </div>

        {/* CTA SECTION */}
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">

          <h2 className="text-2xl md:text-3xl font-semibold max-w-xl">
            Let’s build something amazing together.
          </h2>

          <div className="flex w-full md:w-auto gap-3">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="bg-transparent border border-white/20 px-4 py-3 rounded-full outline-none w-full md:w-72 text-sm focus:border-purple-500"
            />

            <button
              onClick={handleSubmit}
              className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 transition text-sm"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Junaid. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;