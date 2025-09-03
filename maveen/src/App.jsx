import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: true, // run only once
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

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918870459630"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-25 right-6 bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
      </a>
      <a
        href="http://linkedin.com/in/maven-yanim-40975031b"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-39 right-6 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition"
      >
        <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
      </a>
       
    </>
  );
}

export default App;
