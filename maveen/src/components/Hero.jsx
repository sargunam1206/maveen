import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../assets/hero.jpg"; // Replace with your image path
import About from "../pages/About";

const Hero = () => (
  <>
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 px-6">
        
        {/* Left: Text */}
        <div className="flex-1 text-center lg:text-left" data-aos="zoom-in">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#0056A6] mb-4">
             Endeavor to Excellence
          </h1>

          <p className="text-lg text-gray-600 mb-3 font-bold">
            Advisory Services and Business Process Improvement.
          </p>
          <p className="text-lg mb-6 text-justify">
            {/*<br /> */}
            We help organizations improve performance through specialized training, expert
            consulting and World Class Manufacturing Practices.
          </p>

          <div className="flex justify-center lg:justify-start gap-4">
            <Link
              to="/about"
              className="bg-[#D62828] hover:bg-[#004080] text-white px-5 py-2 rounded-lg shadow-md"
            >
              More
            </Link>
            <Link
              to="/contact"
              className="border border-[#0056A6] text-[#0056A6] hover:bg-[#0056A6] hover:text-white px-5 py-2 rounded-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={HeroImg}
            alt="Hero"
            className="rounded-lg shadow-lg max-w-lg w-full"
            data-aos="fade-up"
          />
        </div>
      </div>
    </section>
    {/* <About /> */}
  </>
);

export default Hero;
