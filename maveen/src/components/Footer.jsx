import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#0050A0] text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="flex items-center text-xl font-bold">
            <span className="bg-white text-blue-700 px-2 py-1 rounded-md mr-2">M</span>
            Maven Yanim
          </h2>
          <p className="mt-3 text-gray-200">
            Professional consulting for operational excellence across industries.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-gray-200">
            <li>OpEx Consulting</li>
            <li>5S Implementation</li>
            <li>Quality Management</li>
            <li>Lean Practices</li>
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Industries</h3>
          <ul className="space-y-2 text-gray-200">
            <li>Engineering</li>
            <li>Automotive</li>
            <li>Textile</li>
            <li>Food & Consumer Goods</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-3 text-gray-200">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-blue-200" />
              info@mavenyanim.com
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-red-400" />
              +1 (555) 123-4567
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-red-500" />
              Business District
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-400 mt-10 pt-4 text-center text-gray-200 text-sm">
        © 2024 Maven Yanim. All rights reserved.
      </div>
    </footer>
  );
}