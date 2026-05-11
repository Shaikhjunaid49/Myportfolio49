import React, { useEffect, useState } from "react";
import { getSkills } from "../../api/skillApi";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

const iconMap = {
  html: <FaHtml5 />,
  css: <FaCss3Alt />,
  javascript: <FaJs />,
  react: <FaReact />,
  nodejs: <FaNode />,
  express: <SiExpress />,
  mongodb: <SiMongodb />,
  tailwind: <SiTailwindcss />,
  github: <FaGithub />,
  vercel: <SiVercel />,
  netlify: <SiNetlify />,
};

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await getSkills();
        setSkills(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load skills");
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) {
    return (
      <section className="bg-[#0a0a0a] text-white py-24 text-center">
        <p className="text-gray-400">Loading skills...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-[#0a0a0a] text-white py-24 text-center">
        <p className="text-red-500">{error}</p>
      </section>
    );
  }

  return (
    <section id="skills" className="bg-[#0a0a0a] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">

          {skills.length === 0 ? (
            <p className="text-gray-400 col-span-full text-center">
              No skills found
            </p>
          ) : (
            skills.map((skill, i) => (
              <motion.div
                key={skill._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.05 }}
                className="flex flex-col items-center justify-center 
                bg-white/5 border border-white/10 
                rounded-2xl p-6 
                hover:border-purple-500 
                transition duration-300 cursor-pointer"
              >
                <div className="text-3xl mb-3 text-purple-400">
                  {iconMap[skill.icon?.toLowerCase()] || "🔥"}
                </div>

                <p className="text-sm text-gray-300">
                  {skill.name}
                </p>
              </motion.div>
            ))
          )}

        </div>
      </div>
    </section>
  );
};

export default Skills;