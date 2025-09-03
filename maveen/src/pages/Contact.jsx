import React, { useRef,useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "emailjs-com";
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

const services = [
  { id: 1, name: "OpEx Consulting" },
  { id: 2, name: "5S Training & Implementation" },
  { id: 3, name: "Quality Management System" },
  { id: 4, name: "TPM Implementation" },
  { id: 5, name: "Productivity & Inventory Management" },
  { id: 6, name: "Kaizen & Lean Practices" },
  { id: 7, name: "Human Resource Development" },
  { id: 8, name: "General Inquiry" },
];

const Contact = () => {
    const [flash, setFlash] = useState(null);
      const [selectedService, setSelectedService] = useState(services[0]);


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p1k4d2z", // replace with EmailJS service ID
        "template_hsq67yb", // replace with EmailJS template ID
        form.current,
        "5JLd2KkGJal3VKIou" // replace with EmailJS public key
      )
      .then(
        () => {
          setFlash({ type: "success", message: "✅ Message sent successfully!" });
          e.target.reset();
          setTimeout(() => setFlash(null), 4000); // hide after 4s
        },
        (error) => {
          setFlash({
            type: "error",
            message: "❌ Failed to send message. Please try again.",
          });
          console.error("EmailJS Error:", error);
          setTimeout(() => setFlash(null), 4000);
        }
      );
  };

  return (
    <>
      {/* Hero Section */}
      {/* <section className="bg-white py-16" data-aos="zoom-in">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#0050A0] mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-maven-gray max-w-3xl mx-auto leading-relaxed">
            Ready to transform your operations? Get in touch with our OpEx
            consulting experts today.
          </p>
        </div>
      </section> */}
      
{/* Hero Section */}
<section className="bg-white py-16" data-aos="zoom-in">
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

{/* Flash Message Section (just after Hero, before Contact Form) */}
{flash && (
  <div className="container mx-auto px-6 mt-4">
    <div
      className={`rounded-lg px-6 py-4 shadow-md font-medium text-center transition-all duration-300 ${
        flash.type === "success"
          ? "bg-green-100 text-green-800 border border-green-300"
          : "bg-red-100 text-red-800 border border-red-300"
      }`}
    >
      {flash.message}
    </div>
  </div>
)}

      {/* Contact Form & Info Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-6">
         
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div
                className="bg-white rounded-lg shadow-lg p-8"
                data-aos="zoom-in-right"
              >
                <h2 className="text-2xl font-heading font-bold text-maven-blue mb-6">
                  Send Us a Message
                </h2>
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-maven-gray mb-2"
                      >
                        First Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstNam"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-maven-red focus:outline-none transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-maven-gray mb-2"
                      >
                        Last Name 
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-maven-red focus:outline-none transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-maven-gray mb-2"
                    >
                      Email Address  <span className="text-red-600">*</span>
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
                      Company Name  <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-maven-red focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  {/* Industry Dropdown */}
<div>
  <label
    htmlFor="industry"
    className="block text-sm font-medium text-maven-gray mb-2"
  >
    Industry <span className="text-red-600">*</span>
  </label>

  <div className="relative">
    <select
      id="industry"
      name="industry"
      required
      className="w-full appearance-none px-4 py-3 pr-10 border-2 border-gray-300 rounded-lg bg-white text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none transition duration-300"
      defaultValue=""
    >
      <option value="" disabled>
        Select your industry
      </option>
      <option value="engineering">Engineering</option>
      <option value="automotive">Automotive</option>
      <option value="textile">Textile</option>  
      <option value="food">Food</option>
      <option value="consumer-goods">Consumer Goods</option>
      <option value="other">Other</option>
    </select>

    {/* Dropdown Icon */}
    <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
      ▼
    </span>
  </div>
</div>
           

<div>
  <label
    htmlFor="service"
    className="block text-sm font-medium text-maven-gray mb-2"
  >
    Service Interest <span className="text-red-500">*</span>
  </label>

  <div className="relative">
    <select
      id="service"
      name="service"
      className="w-full appearance-none px-4 py-3 pr-10 border-2 border-gray-300 rounded-lg bg-white text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none transition duration-300"
      defaultValue=""
    >
      <option value="" disabled>
        Select a service
      </option>
      <option value="opex-consulting" className="hover:bg-blue-100">
        OpEx Consulting
      </option>
      <option value="5s-implementation">5S Training & Implementation</option>
      <option value="quality-management">Quality Management System</option>
      <option value="tpm">TPM Implementation</option>
      <option value="productivity">
        Productivity & Inventory Management
      </option>
      <option value="kaizen-lean">Kaizen & Lean Practices</option>
      <option value="hr-development">Human Resource Development</option>
      <option value="general-inquiry" className="rounded-lg">General Inquiry</option>
    </select>

    {/* Dropdown Icon */}
    <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500">
      ▼
    </span>
  </div>
</div>



                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-maven-gray mb-2"
                    >
                      Message  <span className="text-red-600">*</span>
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
<div className="space-y-8" data-aos="zoom-in-left">
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
          <p className="text-maven-gray"> balak@mavenyanim.in</p>
          {/* <p className="text-maven-gray">consulting@mavenyanim.com</p> */}
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
          <FontAwesomeIcon icon={faPhone} className="text-white text-xl" />
        </div>
        <div>
          <h3 className="font-semibold text-[#0050A0] mb-1">Phone</h3>
          <p className="text-maven-gray">+91 88704 59630 </p>
          {/* <p className="text-maven-gray">+1 (555) 987-6543</p> */}
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
          <p className="text-maven-gray"> 15, VKS Layout Extension,</p>
          <p className="text-maven-gray">Suite 456, Corporate Tower</p>
          <p className="text-maven-gray"> Coimbatore, Tamil Nadu, India - 642 002</p>               
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
  <div className="bg-[#0050A0] text-white rounded-lg shadow-lg p-8"  data-aos="zoom-in-right">
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
      <div className="container mx-auto px-6"  data-aos="fade-down">
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

export default Contact;