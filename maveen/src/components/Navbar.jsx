import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white shadow px-4 sticky-top">
        <div className="container">
          {/* Brand Logo */}
          <Link className="navbar-brand fw-bold fs-3" to="/">
            <span className="logo-orange">Ma</span>
            <span className="logo-brown">veen</span>
          </Link>

          {/* Toggler for mobile */}
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop Nav */}
          <div className="d-none d-lg-flex justify-content-end">
            <ul className="navbar-nav mb-2 mb-lg-0 gap-lg-4">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/customers">Customers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Card */}
      {menuOpen && (
        <div className="bg-white shadow rounded-3 m-3 p-3 d-lg-none animate-dropdown">
          <ul className="list-unstyled mb-0">
            <li className="mb-2">
              <Link className="text-dark text-decoration-none" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li className="mb-2">
              <Link className="text-dark text-decoration-none" to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
            </li>
            <li className="mb-2">
              <Link className="text-dark text-decoration-none" to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            </li>
            <li className="mb-2">
              <Link className="text-dark text-decoration-none" to="/customers" onClick={() => setMenuOpen(false)}>Customers</Link>
            </li>
            <li>
              <Link className="text-dark text-decoration-none" to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
