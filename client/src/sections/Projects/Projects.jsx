import React, { useEffect, useState } from "react";
import { getProjects } from "../../api/projectApi";
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (err) {
        setError("Failed to load projects");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="bg-[#0a0a0a] text-white py-24 text-center">
        <p className="text-gray-400">Loading projects...</p>
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
    <section id="projects" className="bg-[#0a0a0a] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.length === 0 ? (
            <p className="text-gray-400 col-span-full text-center py-10 border border-white/10 rounded-xl">
              No projects found
            </p>
          ) : (
            projects.map((project, i) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500 transition group"
              >
                
                {/* Image */}
                <div className="overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x250";
                    }}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  
                  <h3 className="text-lg font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack?.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-white/10 rounded-md text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 text-center py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition text-sm"
                      >
                        Live
                      </a>
                    )}

                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 text-center py-2 rounded-lg border border-white/20 hover:border-purple-500 transition text-sm"
                      >
                        Code
                      </a>
                    )}

                  </div>

                </div>
              </motion.div>
            ))
          )}

        </div>
      </div>
    </section>
  );
};

export default Projects;