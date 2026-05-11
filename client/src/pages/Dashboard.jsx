import React, { useEffect, useState } from "react";
import { getProjects, deleteProject, createProject } from "../api/projectApi";
import { getMessages } from "../api/contact";
import { getSkills, createSkill, deleteSkill } from "../api/skillApi";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    githubLink: "",
    liveLink: "",
    techStack: "",
    category: "fullstack",
  });

  const [skillForm, setSkillForm] = useState({
    name: "",
    level: "Beginner",
    icon: "",
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const [p, m, s] = await Promise.all([
        getProjects(),
        getMessages(),
        getSkills(),
      ]);

      setProjects(p || []);
      setMessages(m || []);
      setSkills(s || []);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleAddProject = async (e) => {
    e.preventDefault();

    if (!form.title || !form.description || !form.techStack) {
      alert("⚠ Required fields missing");
      return;
    }

    await createProject({
      ...form,
      techStack: form.techStack.split(",").map((t) => t.trim()),
    });

    setForm({
      title: "",
      description: "",
      image: "",
      githubLink: "",
      liveLink: "",
      techStack: "",
      category: "fullstack",
    });

    fetchData();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this project?")) return;
    await deleteProject(id);
    fetchData();
  };

  const handleSkillChange = (e) =>
    setSkillForm({ ...skillForm, [e.target.name]: e.target.value });

  const handleAddSkill = async (e) => {
    e.preventDefault();
    if (!skillForm.name) return;

    await createSkill(skillForm);
    setSkillForm({ name: "", level: "Beginner", icon: "" });
    fetchData();
  };

  const handleDeleteSkill = async (id) => {
    if (!window.confirm("Delete this skill?")) return;
    await deleteSkill(id);
    fetchData();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0a0a0a] to-[#111] text-white p-6">
      
      {/* HEADER */}
      <h1 className="text-4xl font-bold mb-10">
        Admin <span className="text-purple-500">Dashboard</span>
      </h1>

      {/* ================= STATS ================= */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          { label: "Projects", value: projects.length },
          { label: "Messages", value: messages.length },
          { label: "Skills", value: skills.length },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-purple-500 transition"
          >
            <p className="text-gray-400 text-sm">{item.label}</p>
            <h3 className="text-3xl font-bold mt-2">{item.value}</h3>
          </div>
        ))}
      </div>

      {/* ================= ADD PROJECT ================= */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-12">
        <h2 className="text-xl font-semibold mb-6">Add Project</h2>

        <form onSubmit={handleAddProject} className="grid md:grid-cols-2 gap-4">
          {["title", "image", "githubLink", "liveLink"].map((field) => (
            <input
              key={field}
              name={field}
              value={form[field]}
              onChange={handleChange}
              placeholder={field}
              className="p-3 bg-black border border-white/20 rounded-lg focus:border-purple-500 outline-none"
            />
          ))}

          <input
            name="techStack"
            value={form.techStack}
            onChange={handleChange}
            placeholder="React, Node"
            className="p-3 bg-black border border-white/20 rounded-lg"
          />

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="p-3 bg-black border border-white/20 rounded-lg"
          >
            <option>frontend</option>
            <option>backend</option>
            <option>fullstack</option>
          </select>

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="p-3 bg-black border border-white/20 rounded-lg md:col-span-2"
          />

          <button className="bg-purple-600 py-3 rounded-lg md:col-span-2 hover:bg-purple-700">
            Add Project
          </button>
        </form>
      </div>

      {/* ================= PROJECTS ================= */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-6">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p._id}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500 transition"
            >
              {p.image && (
                <img
                  src={p.image}
                  alt=""
                  className="h-40 w-full object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-400 mt-1">
                  {p.description}
                </p>

                <div className="flex justify-between mt-4 text-sm">
                  <a href={p.liveLink} className="text-purple-400">
                    Live
                  </a>
                  <button
                    onClick={() => handleDelete(p._id)}
                    className="text-red-400"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= SKILLS ================= */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-6">Skills</h2>

        <form onSubmit={handleAddSkill} className="grid md:grid-cols-3 gap-4 mb-6">
          <input
            name="name"
            value={skillForm.name}
            onChange={handleSkillChange}
            placeholder="Skill"
            className="p-3 bg-black border border-white/20 rounded-lg"
          />
          <select
            name="level"
            value={skillForm.level}
            onChange={handleSkillChange}
            className="p-3 bg-black border border-white/20 rounded-lg"
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
          <input
            name="icon"
            value={skillForm.icon}
            onChange={handleSkillChange}
            placeholder="Icon"
            className="p-3 bg-black border border-white/20 rounded-lg"
          />

          <button className="bg-purple-600 py-3 rounded-lg md:col-span-3">
            Add Skill
          </button>
        </form>

        <div className="flex flex-wrap gap-3">
          {skills.map((s) => (
            <div
              key={s._id}
              className="bg-white/10 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-600 transition"
            >
              {s.name}
              <span className="text-xs">{s.level}</span>
              <button onClick={() => handleDeleteSkill(s._id)}>✕</button>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MESSAGES ================= */}
      <div>
        <h2 className="text-xl font-semibold mb-6">Messages</h2>

        {messages.length === 0 ? (
          <p className="text-gray-400">No messages</p>
        ) : (
          <div className="grid gap-4">
            {messages.map((msg) => (
              <div
                key={msg._id}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-purple-500 transition"
              >
                <div className="flex justify-between flex-wrap gap-2">
                  <div>
                    <h3 className="font-semibold">{msg.name}</h3>
                    <p className="text-sm text-gray-400">{msg.email}</p>
                  </div>
                  <span className="text-xs text-gray-500">
                    {new Date(msg.createdAt).toLocaleString()}
                  </span>
                </div>

                <p className="mt-4 text-gray-300">{msg.message}</p>

                <div className="mt-4 flex justify-end gap-3">
                  <a
                    href={`mailto:${msg.email}`}
                    className="bg-purple-600 px-3 py-1 rounded-md text-sm"
                  >
                    Reply
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;