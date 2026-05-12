import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../../assets/About.png";
const About = () => {
  return (
    <section id="about" className="bg-[#0a0a0a] text-white py-24 px-6">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT - IMAGE CARD */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          {/* Glow */}
          <div className="absolute w-72 h-72 bg-purple-600/20 blur-3xl rounded-full"></div>

          {/* Card */}
          <motion.div
            className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6"
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            
            <img
              src={AboutImg}
              alt="profile"
              className="w-72 h-80 object-cover rounded-2xl"
            />

            <h2 className="mt-4 text-xl font-semibold text-center">
              Junaid
            </h2>

            <p className="text-purple-400 text-center text-sm">
              MERN Developer
            </p>

          </motion.div>

        </motion.div>

        {/* RIGHT - CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Me
          </h2>

          <p className="text-gray-400 mb-6">
            I’m a passionate MERN stack developer focused on building modern,
            scalable, and user-friendly web applications. I enjoy turning complex
            problems into simple, beautiful, and intuitive solutions.
          </p>

          {/* Services */}
          <div className="grid sm:grid-cols-2 gap-6 mt-6">

            {[
              {
                title: "Web Development",
                desc: "Building responsive and scalable web apps using MERN stack.",
              },
              {
                title: "UI/UX Design",
                desc: "Creating modern and user-friendly interface designs.",
              },
              {
                title: "API Integration",
                desc: "Connecting frontend with powerful backend services.",
              },
              {
                title: "Performance",
                desc: "Optimizing apps for speed and best performance.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:border-purple-500 transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;