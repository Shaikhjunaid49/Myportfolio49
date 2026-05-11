import React from "react";
import heroImg from "../../assets/hero-ui.png";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a] to-[#1a0b2e] text-white pt-24 overflow-hidden">
      <div className="w-full max-w-[1300px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-6 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          className="ml-4 md:ml-8"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-400 mb-3">Hi, I'm</p>

          <motion.h1
            className="text-5xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Junaid
          </motion.h1>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Web Developer
          </motion.h2>

          <motion.p
            className="text-gray-400 mt-5 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I build modern, scalable, and user-friendly web applications using
            MERN stack.
          </motion.p>

          <motion.div
            className="flex gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <button className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 transition">
              My Work
            </button>

            <button className="px-6 py-3 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition">
              Hire Me
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}

        <motion.div
          className="relative flex justify-end items-center pr-4 md:pr-8"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* soft glow ONLY (no edge line) */}
          <div className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-[160px] rounded-full"></div>

          {/* image */}
          <motion.img
            src={heroImg}
            alt="hero visual"
            className="
      relative 
      w-[350px] md:w-[480px] 
      object-contain 
      opacity-95
    "
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
