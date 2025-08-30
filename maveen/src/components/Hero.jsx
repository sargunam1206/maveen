import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../assets/hero.jpg"; // use your image here

const Hero = () => (
  <div className="hero-section py-5">
    <div className="container d-flex flex-column flex-lg-row align-items-center">
      
      {/* Left Side - Text */}
      <div className="hero-text text-center text-lg-start flex-fill mb-4 mb-lg-0">
        <h6 className="fw-bold display-2 ">
          Excellence to Execute & Care
        </h6>
        {/* <p className="lead">Excellence to Execute & Care</p> */}
        <p>
          Advisory Services & Business Process Improvement. <br />
          We help organizations achieve performance through specialized training,
          consulting, and world-class operational excellence practices.
        </p>
        <div className="hero-buttons mt-4">
          <Link to="/about" className="btn btn-warning me-2">More</Link>
          <Link to="/contact" className="btn btn-outline-dark">Contact Us</Link>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hero-image flex-fill text-center">
        <img
          src={HeroImg}
          alt="Hero"
          className="img-fluid rounded"
          style={{ maxWidth: "400px" }}
        />
      </div>
    </div>
  </div>
);

export default Hero;
