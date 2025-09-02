import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get current path

  // Check if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          
          {/* Logo */}
          <Link to="/" className="flex items-center text-2xl font-bold gap-2">
            <img src={Logo} alt="Logo" className="w-10 h-10 object-contain" />
            <span>
              <span className="text-[#D62828]">Ma</span>
              <span className="text-[#0056A6]">ven</span>
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0056A6]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-8 font-medium">
            <li>
              <Link 
                to="/" 
                className={`${isActive("/") ? "text-[#D62828] font-bold border-b-2 border-[#D62828]" : "text-[#0056A6]"} hover:text-[#D62828] transition-colors pb-1`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`${isActive("/about") ? "text-[#D62828] font-bold border-b-2 border-[#D62828]" : "text-[#0056A6]"} hover:text-[#D62828] transition-colors pb-1`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className={`${isActive("/services") ? "text-[#D62828] font-bold border-b-2 border-[#D62828]" : "text-[#0056A6]"} hover:text-[#D62828] transition-colors pb-1`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`${isActive("/contact") ? "text-[#D62828] font-bold border-b-2 border-[#D62828]" : "text-[#0056A6]"} hover:text-[#D62828] transition-colors pb-1`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="lg:hidden bg-white shadow-md px-4 py-3 space-y-3">
            <Link 
              to="/" 
              onClick={() => setMenuOpen(false)} 
              className={`block ${isActive("/") ? "text-[#D62828] font-bold" : "text-gray-700"} hover:text-[#0056A6] transition-colors`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              onClick={() => setMenuOpen(false)} 
              className={`block ${isActive("/about") ? "text-[#D62828] font-bold" : "text-gray-700"} hover:text-[#0056A6] transition-colors`}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              onClick={() => setMenuOpen(false)} 
              className={`block ${isActive("/services") ? "text-[#D62828] font-bold" : "text-gray-700"} hover:text-[#0056A6] transition-colors`}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setMenuOpen(false)} 
              className={`block ${isActive("/contact") ? "text-[#D62828] font-bold" : "text-gray-700"} hover:text-[#0056A6] transition-colors`}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;