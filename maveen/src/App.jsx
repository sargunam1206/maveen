import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage"; // adjust path if needed

// Simple pages
// const Home = () => <h1 className="p-4">🏠 Welcome to Home</h1>;
const About = () => <h1 className="p-4">ℹ️ About Us</h1>;
const Services = () => <h1 className="p-4">🛠 Services</h1>;
const Customers = () => <h1 className="p-4">👥 Customers</h1>;
const Contact = () => <h1 className="p-4">📞 Contact</h1>;


function App() {
    useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
    </Router>
  );
}

export default App;