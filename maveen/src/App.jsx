import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services"; 
import About from './pages/About'
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

function App() {
    useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </>
  );
}

export default App;