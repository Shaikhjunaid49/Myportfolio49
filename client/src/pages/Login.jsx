import React, { useState } from "react";
import { loginAdmin } from "../api/auth";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem("token");
  if (token) return <Navigate to="/" />;

  const from = location.state?.from?.pathname || "/dashboard";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await loginAdmin(formData);
      localStorage.setItem("token", res.data.token);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-6 relative overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-white relative z-10"
      >
        
        <h2 className="text-2xl font-bold text-center mb-2">
          Admin Login
        </h2>

        <p className="text-gray-400 text-sm text-center mb-6">
          Access your dashboard securely
        </p>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-2 rounded-lg mb-4 text-center">
            {error}
          </div>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>

          {/* EMAIL */}
          <div>
            <label className="text-sm text-gray-400">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="admin@email.com"
              className="w-full mt-1 px-4 py-3 bg-black/40 border border-white/20 rounded-xl outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm transition"
              required
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm text-gray-400">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-3 bg-black/40 border border-white/20 rounded-xl outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm transition"
              required
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-medium disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>
      </motion.div>
    </div>
  );
};

export default Login;