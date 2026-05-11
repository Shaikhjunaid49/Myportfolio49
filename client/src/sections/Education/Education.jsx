import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="bg-black text-white py-28 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT BIG TEXT */}
        <motion.div
          className="sticky top-32"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-6xl md:text-7xl font-extrabold text-white/10 leading-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            EDUCATION
          </motion.h2>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          {/* Main Info */}
          <div>
            <p className="text-sm text-gray-500 mb-2">
              2022 — Present
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold mb-2">
              Bachelor of Computer Applications
            </h3>

            <p className="text-purple-400 text-sm">
              Swami Ramanand Teerth Marathwada University
            </p>

            <p className="text-gray-400 text-sm mb-4">
              Rajiv Gandhi College
            </p>

            <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
              Currently pursuing BCA with a strong focus on full-stack development.
              Built real-world MERN stack applications including chat systems,
              booking platforms, and scalable web solutions.
            </p>
          </div>

          {/* Highlight Strip */}
          <motion.div
            className="border border-white/10 rounded-2xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >

            <div>
              <p className="text-gray-500 text-sm">Performance</p>
              <h4 className="text-xl font-semibold text-purple-400">
                CGPA 9+
              </h4>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Focus Area</p>
              <h4 className="text-white text-sm">
                MERN Stack • Full Stack Development
              </h4>
            </div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
};

export default Education;