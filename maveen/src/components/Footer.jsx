import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import image from "../assets/image.png";


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
          {/* <h2 className="flex items-center text-xl text-[#D62828] font-bold"> */}
          
            <img src={image} alt="" className="w-50 h-15 rounded-sm m-2"  />
            {/* Maven  */}
          {/* </h2> */}

           {/* <img src={Logo} alt="Logo" className="w-15 h-15 object-contain" /> */}
                       {/* <span>
                         <span className="text-[#D62828]">Maven</span>
                         <span className="text-[#0056A6]">Yanim</span>
           
                       </span> */}

          <p className="mt-4 text-gray-200 leading-relaxed">
          Technical and Management Advisory Services, Business Process Improvement
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-200">
            <li>OpEx Consulting</li>
            <li>Management Consulting</li>
            <li>5S Training & Implementation</li>
            <li>Quality Management</li>
            <li>Lean Manufacturing Practices</li>
            <li>World Class Manufacturing Practices</li>
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
            <li>Educational Industries</li>
            <li>Processing</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          {/* <p className="text-gray-300 mb-4 text-sm">
            MAVEN YANIM 
          </p> */}
          <ul className="space-y-4 text-gray-200 text-sm leading-relaxed">
            <li className="flex items-start">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 text-red-500 mt-1" />
              <span>
                15, VKS Layout Extension, <br />A. Sangampalayam, <br />Pollachi - 642 002, <br />
                Coimbatore, Tamil Nadu, India.
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
              info@mavenyanim.in
                {/* <br /> saibalak@mavenyanim.in */}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      {/* <div className="border-t border-gray-400 mt-12 pt-4 text-center text-gray-200 text-sm">
        © 2025 Maven Yanim. All rights reserved. Powered by NeuralArc
      </div> */}
      {/* Bottom Bar */}
<div className="border-t border-gray-400 mt-12 pt-4 text-center text-gray-200 text-sm">
  © 2025 Maven Yanim. All rights reserved. Powered by{" "}
  <a 
    href="https://www.neuralarc.com" 
    target="_blank" 
    rel="noopener noreferrer" 
   className="text-white hover:text-yellow-300 font-medium transition-colors duration-200"
  >
    NeuralArc
  </a>
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
