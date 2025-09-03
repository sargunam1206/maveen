import React from "react";
import {
  Award,
  Workflow,
  Users,
  Clock,
  ShieldCheck,
  GraduationCap,
} from "lucide-react"; // icons

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Award className="w-10 h-10 text-[#D62828]" />,
      title: "Reputation",
      description: "Proven professional competence with a strong track record.",
    },
    {
      icon: <Workflow className="w-10 h-10 text-[#D62828]" />,
      title: "Process Partner",
      description:
        "Your end-to-end partner for quality and continuous improvement.",
    },
    {
      icon: <Users className="w-10 h-10 text-[#D62828]" />,
      title: "Expert Trainers",
      description:
        "Experienced consultants with hands-on industry expertise.",
    },
    {
      icon: <Clock className="w-10 h-10 text-[#D62828]" />,
      title: "On-Time Delivery",
      description: "Projects executed within committed timelines.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#D62828]" />,
      title: "Trust & Fairness",
      description: "Integrity and fairness maintained throughout the process.",
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-[#D62828]" />,
      title: "Qualified Consultants",
      description:
        "Certified Lean Six Sigma professionals with cross-industry expertise.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-5xl font-bold text-gray-800 mb-4">
          Why Choose Us
        </h2>
        <p className="text-gray-600  font-semibold mb-12">
          The <span className="text-[#D62828] font-semibold">Maven Yanim Advantage</span>
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md p-6 text-left hover:shadow-xl hover:scale-105 transform transition duration-300"
            data-aos="zoom-in-down"
           >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-[#0056A6] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
