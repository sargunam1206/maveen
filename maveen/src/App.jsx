import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage"; // adjust path if needed
import About from './pages/About'
import Footer from "./components/Footer";

// Simple pages
// const Home = () => <h1 className="p-4">🏠 Welcome to Home</h1>;
// const About = () => <h1 className="p-4">ℹ️ About Us</h1>;
// const Services = () => <h1 className="p-4">🛠 Services</h1>;
// const Customers = () => <h1 className="p-4">👥 Customers</h1>;
// const Contact = () => <h1 className="p-4">📞 Contact</h1>;


function App() {
  return (
    <>
     <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path="/customers" element={<Customers />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </main>
      
    </Router>
    <Footer/>
    </>
   
    
  );
}

export default App;
