import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/Logo.png";


export default function Footer() {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0050A0] text-white py-12 relative" data-aos="fade-up">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="flex items-center text-xl font-bold">
            {/* <span className="bg-white text-blue-700 px-2 py-1 rounded-md mr-2">M</span> */}
            <img src={Logo} alt="" className="w-9 h-9 rounded-sm m-2" />
            Maven Yanim
          </h2>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Professional consulting for operational excellence across industries.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-200">
            <li>OpEx Consulting</li>
            <li>5S Implementation</li>
            <li>Quality Management</li>
            <li>Lean Practices</li>
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Industries</h3>
          <ul className="space-y-2 text-gray-200">
            <li>Engineering</li>
            <li>Automotive</li>
            <li>Textile</li>
            <li>Food & Consumer Goods</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-300 mb-4 text-sm">
            MAVEN YANIM – Endeavor to Excellence
          </p>
          <ul className="space-y-4 text-gray-200 text-sm leading-relaxed">
            <li className="flex items-start">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 text-red-500 mt-1" />
              <span>
                15, VKS Layout Extension, A. Sangampalayam, Pollachi, <br />
                Coimbatore, Tamil Nadu, India - 642 002
              </span>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon icon={faPhone} className="mr-3 text-green-400 mt-1" />
              <span>
                +91 88704 59630 
                {/* <br /> +91 98947 61332 */}
              </span>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-blue-200 mt-1" />
              <span>
                balak@mavenyanim.in 
                {/* <br /> saibalak@mavenyanim.in */}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-400 mt-12 pt-4 text-center text-gray-200 text-sm">
        © 2025 Maven Yanim. All rights reserved. Powered by NeuralArc
      </div>

     

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-1 right-6 bg-red-500 text-white p-2 rounded-full shadow-lg hover:bg-red-600 transition"
      >
        <FontAwesomeIcon icon={faArrowUp} className="text-xl" />
      </button>
    </footer>
  );
}
