import React from "react";
import { Workflow, ShieldCheck, ClipboardList } from "lucide-react";
import { motion } from "framer-motion";

const Capabilities = () => {
  // Capability cards data
  const capabilities = [
    {
      icon: <Workflow className="w-10 h-10 text-[#0056A6]" />,
      title: "Business Process Improvement",
      description: "Streamlining processes to enhance efficiency and effectiveness.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#0056A6]" />,
      title: "Quality Improvements",
      description: "Driving excellence by improving product and service quality.",
    },
    {
      icon: <ClipboardList className="w-10 h-10 text-[#0056A6]" />,
      title: "Daily Work Management",
      description: "Structured systems to manage day-to-day operations effectively.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto text-center px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Our Core Services
        </h2>
        <p className="text-gray-600 mb-12">
          We provide end-to-end solutions that drive your digital transformation
        </p>

        {/* Flex layout instead of grid */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-2xl p-8 text-left flex-1 cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
              <div className="mb-4">{cap.icon}</div>
              <h3 className="text-2xl font-semibold text-[#0056A6] mb-2">
                {cap.title}
              </h3>
              <p className="text-gray-600">{cap.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom link */}
        <div className="mt-10">
          <a
            href="/services"
            className="text-[#0056A6] font-medium hover:underline inline-flex items-center"
          >
            View all Services →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
