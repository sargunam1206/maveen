import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../assets/hero.jpg"; // Replace with your image path

const Hero = () => (
  <section className="bg-gray-50 py-16">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-6">
      
      {/* Left: Text */}
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
          MAVEEN TEAM
        </h1>
        <h2 className="text-sky-600">test</h2>
        <p className="text-lg text-gray-600 mb-3">
          Excellence to Execute & Care
        </p>
        <p className="text-gray-500 mb-6">
          Advisory Services & Business Process Improvement. <br />
          We help organizations achieve performance through specialized training,
          consulting, and world-class operational excellence practices.
        </p>

        <div className="flex justify-center lg:justify-start gap-4">
          <Link
            to="/about"
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg shadow-md"
          >
            More
          </Link>
          <Link
            to="/contact"
            className="border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-5 py-2 rounded-lg"
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
          className="rounded-lg shadow-lg max-w-sm w-full"
        />
      </div>
    </div>
  </section>
);

export default Hero;
