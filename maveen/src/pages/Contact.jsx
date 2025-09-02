import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faClock,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "256px", // same as h-64
};

const center = {
  lat: 12.9716, // Replace with your office latitude
  lng: 77.5946, // Replace with your office longitude
};
const Contact = () => {
  return (
    <>
      {/* Header */}
      {/* <header className="bg-maven-blue text-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-maven-blue font-bold text-xl">M</span>
              </div>
              <h1 className="text-2xl  text-[]font-heading font-bold">Maven Yanim</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="hover:text-maven-red transition-colors duration-300 border-b-2 border-transparent hover:border-maven-red"
              >
                Home
              </a>
              <a
                href="#"
                className="hover:text-maven-red transition-colors duration-300 border-b-2 border-transparent hover:border-maven-red"
              >
                Services
              </a>
              <a
                href="#"
                className="hover:text-maven-red transition-colors duration-300 border-b-2 border-transparent hover:border-maven-red"
              >
                About
              </a>
              <a
                href="#"
                className="hover:text-maven-red transition-colors duration-300 border-b-2 border-maven-red"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
<<<<<<< HEAD
      <section className="bg-white py-16">
=======
      <section className="bg-white py-16"  data-aos="zoom-in">
>>>>>>> origin/main
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#0050A0] mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-maven-gray max-w-3xl mx-auto leading-relaxed">
            Ready to transform your operations? Get in touch with our OpEx
            consulting experts today.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
<<<<<<< HEAD
              <div className="bg-white rounded-lg shadow-lg p-8">
=======
              <div className="bg-white rounded-lg shadow-lg p-8"  data-aos="zoom-in-right">
>>>>>>> origin/main
                <h2 className="text-2xl font-heading font-bold text-maven-blue mb-6">
                  Send Us a Message
                </h2>
                <form id="contactForm" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-maven-gray mb-2"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-maven-red focus:outline-none transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-maven-gray mb-2"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-maven-red focus:outline-none transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-maven-gray mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-maven-red focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-maven-gray mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-maven-red focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-maven-gray mb-2"
                    >
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-maven-red focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="industry"
                      className="block text-sm font-medium text-maven-gray mb-2"
                    >
                      Industry *
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-maven-red focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Select your industry</option>
                      <option value="engineering">Engineering</option>
                      <option value="automotive">Automotive</option>
                      <option value="textile">Textile</option>
                      <option value="food">Food</option>
                      <option value="consumer-goods">Consumer Goods</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-maven-gray mb-2"
                    >
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-maven-red focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="opex-consulting">OpEx Consulting</option>
                      <option value="5s-implementation">
                        5S Training & Implementation
                      </option>
                      <option value="quality-management">
                        Quality Management System
                      </option>
                      <option value="tpm">TPM Implementation</option>
                      <option value="productivity">
                        Productivity & Inventory Management
                      </option>
                      <option value="kaizen-lean">Kaizen & Lean Practices</option>
                      <option value="hr-development">
                        Human Resource Development
                      </option>
                      <option value="general-inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-maven-gray mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      placeholder="Tell us about your operational challenges and how we can help..."
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-maven-red focus:outline-none transition-colors duration-300 resize-vertical"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-maven-red hover:bg-red-700 bg-red-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
<<<<<<< HEAD
<div className="space-y-8">
=======
<div className="space-y-8" data-aos="zoom-in-left">
>>>>>>> origin/main
  {/* Contact Details */}
  <div className="bg-white rounded-lg shadow-lg p-8">
    <h2 className="text-2xl font-heading font-bold text-maven-blue mb-6">
      Get In Touch
    </h2>
    <div className="space-y-6">
      {/* Email */}
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
          <FontAwesomeIcon icon={faEnvelope} className="text-white text-xl" />
        </div>
        <div>
          <h3 className="font-semibold text-[#0050A0] mb-1">Email</h3>
          <p className="text-maven-gray">info@mavenyanim.com</p>
          <p className="text-maven-gray">consulting@mavenyanim.com</p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
          <FontAwesomeIcon icon={faPhone} className="text-white text-xl" />
        </div>
        <div>
          <h3 className="font-semibold text-[#0050A0] mb-1">Phone</h3>
          <p className="text-maven-gray">+1 (555) 123-4567</p>
          <p className="text-maven-gray">+1 (555) 987-6543</p>
        </div>
      </div>

      {/* Office */}
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="text-white text-xl"
          />
        </div>
        <div>
          <h3 className="font-semibold text-[#0050A0] mb-1">Office</h3>
          <p className="text-maven-gray">123 Business District</p>
          <p className="text-maven-gray">Suite 456, Corporate Tower</p>
          <p className="text-maven-gray">City, State 12345</p>
        </div>
      </div>

      {/* Business Hours */}
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
          <FontAwesomeIcon icon={faClock} className="text-white text-xl" />
        </div>
        <div>
          <h3 className="font-semibold text-[#0050A0] mb-1">Business Hours</h3>
          <p className="text-maven-gray">Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p className="text-maven-gray">Saturday: 10:00 AM - 2:00 PM</p>
          <p className="text-maven-gray">Sunday: Closed</p>
        </div>
      </div>
    </div>
  </div>

  {/* Why Choose Us */}
<<<<<<< HEAD
  <div className="bg-[#0050A0] text-white rounded-lg shadow-lg p-8">
=======
  <div className="bg-[#0050A0] text-white rounded-lg shadow-lg p-8"  data-aos="zoom-in-right">
>>>>>>> origin/main
    <h2 className="text-2xl font-heading font-bold mb-6">
      Why Choose Maven Yanim?
    </h2>
    <div className="space-y-4">
      {[
        "10+ years of OpEx consulting experience",
        "40+ industries successfully served",
        "TUV-SUD certified consultants",
        "Proven track record of results",
      ].map((item, index) => (
        <div key={index} className="flex items-center space-x-3">
          <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
            <FontAwesomeIcon icon={faCheck} className="text-white text-xs" />
          </div>
          <p>{item}</p>
        </div>
      ))}
    </div>
  </div>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
       <section className="py-16 bg-white">
<<<<<<< HEAD
      <div className="container mx-auto px-6">
=======
      <div className="container mx-auto px-6"  data-aos="fade-down">
>>>>>>> origin/main
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-maven-blue mb-8">
            Visit Our Office
          </h2>
          <div className="bg-maven-light rounded-lg p-8 shadow-lg">
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
            <p className="text-maven-gray mt-4">
              Easily accessible by public transport with ample parking available.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

<<<<<<< HEAD
export default Contact;
=======
export default Contact;
>>>>>>> origin/main
