import React from "react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Capabilities from "../components/Capabilities";
import WhyChooseUs from "../components/whychooseus";
const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <Capabilities />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
