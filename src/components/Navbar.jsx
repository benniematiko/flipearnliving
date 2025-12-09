import React from "react";

import { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
      <a href="/">
        <img
          onClick={() => {
            navigate("/");
            scrollTo(0, 0);
          }}
          src={assets.logo}
          alt=""
          className="h-15 cursor-pointer"
        />
      </a>

      <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-800">
        <Link href="#" className="hover:text-indigo-600 transition">
          Practice Areas
        </Link>
        <Link href="#features" className="hover:text-indigo-600 transition">
          Cases
        </Link>
        <Link href="#testimonials" className="hover:text-indigo-600 transition">
          Our Team
        </Link>
        <NavLink href="#cta" className="hover:text-indigo-600 transition">
          Contact
        </NavLink>
      </div>

      <div className="flex gap-2">
        <a
          href=""
          className="hidden md:block px-6 py-2 bg-indigo-500 hover:bg-indigo-700 active:scale-95 transition-all rounded-full text-white"
        >
          Free Consultations
        </a>
        {/* <a
          href=""
          className="hidden md:block px-6 py-2 border active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900"
        >
          Login
        </a> */}
      </div>

      <button
        onClick={() => setMenuOpen(true)}
        className="md:hidden active:scale-90 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="lucide lucide-menu"
        >
          <path d="M4 5h16M4 12h16M4 19h16" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
