import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../assets/hero.png"; // Replace with your image path

const Hero = () => (
  <>
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 text-center text-white">
        <h1 className="text-2xl lg:text-[28px] font-bold leading-snug mb-6">
          Advisory Services and Business Process Improvement
        </h1>

        <p className="text-xl lg:text-xl mb-8">
          We help organizations improve performance through specialized training,
          expert consulting and World Class Manufacturing Practices.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/about"
            className="bg-[#D62828] hover:bg-[#004080] text-white px-4 py-2 rounded-lg shadow-md text-lg font-medium transition"
          >
          Learn  More
          </Link>
          <Link
            to="/contact"
            className="border border-[#0056A6] text-[#0056A6] hover:bg-[#0056A6] hover:text-white px-4 py-2 rounded-lg text-lg font-medium transition bg-white/90"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default Hero;
