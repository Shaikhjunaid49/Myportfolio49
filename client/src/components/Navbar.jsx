import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const isAdmin = !!token;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="fixed top-4 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="flex items-center justify-between 
        bg-black/80 backdrop-blur-md 
        border border-white/10 
        rounded-full px-6 py-3 shadow-lg">

          {/* Logo */}
          <h1
            onClick={() => navigate("/")}
            className="text-white text-lg font-semibold cursor-pointer"
          >
            Junaid<span className="text-purple-500">.dev</span>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-gray-300 text-sm">

            {/* ALWAYS */}
            <li onClick={() => navigate("/")} className="cursor-pointer hover:text-white">
              Home
            </li>

            <li onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="cursor-pointer hover:text-white">
              Projects
            </li>

            <li onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })} className="cursor-pointer hover:text-white">
              Skills
            </li>

            {/* ADMIN */}
            {isAdmin && (
              <li onClick={() => navigate("/dashboard")} className="cursor-pointer hover:text-white">
                Dashboard
              </li>
            )}

            {/* PUBLIC */}
            {!isAdmin && (
              <>
                <li onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="cursor-pointer hover:text-white">
                  Contact
                </li>

                <li onClick={() => document.getElementById("education")?.scrollIntoView({ behavior: "smooth" })} className="cursor-pointer hover:text-white">
                  Education
                </li>
              </>
            )}

          </ul>

          {/* Auth Button */}
          {isAdmin ? (
            <button
              onClick={handleLogout}
              className="hidden md:block px-5 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white text-sm"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="hidden md:block px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white text-sm"
            >
              Login
            </button>
          )}

          {/* Mobile Menu Button */}
          <div
            className="md:hidden flex flex-col gap-1 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mt-3 bg-black/90 border border-white/10 rounded-2xl p-6 md:hidden space-y-4">

            <p onClick={() => navigate("/")} className="cursor-pointer">Home</p>

            <p onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="cursor-pointer">
              Projects
            </p>

            <p onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })} className="cursor-pointer">
              Skills
            </p>

            {/* ADMIN */}
            {isAdmin && (
              <p onClick={() => navigate("/dashboard")} className="cursor-pointer">
                Dashboard
              </p>
            )}

            {/* PUBLIC */}
            {!isAdmin && (
              <>
                <p onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="cursor-pointer">
                  Contact
                </p>

                <p onClick={() => document.getElementById("education")?.scrollIntoView({ behavior: "smooth" })} className="cursor-pointer">
                  Education
                </p>
              </>
            )}

            {isAdmin ? (
              <button
                onClick={handleLogout}
                className="w-full py-2 rounded-lg bg-red-600 text-white"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="w-full py-2 rounded-lg bg-purple-600 text-white"
              >
                Login
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;