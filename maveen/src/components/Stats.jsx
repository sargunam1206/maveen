import React from "react";
import { UserGroupIcon, BriefcaseIcon, StarIcon } from "@heroicons/react/24/solid";

const Stats = () => {
  return (
    // <section className="bg-gray-100 py-16">
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        
        {/* Clients */}
        <div className="flex flex-col items-center">
          <UserGroupIcon className="w-10 h-10 text-[#0056A6] mb-3" />
          <h3 className="text-2xl font-bold text-gray-800">14+</h3>
          <p className="text-gray-600">Clients</p>
        </div>

         {/* Services */}
        <div className="flex flex-col items-center">
          <BriefcaseIcon className="w-10 h-10 text-[#0056A6] mb-3" />
          <h3 className="text-2xl font-bold text-gray-800">10+</h3>
          <p className="text-gray-600">Total Services</p>
        </div>


        {/* Ratings */}
        <div className="flex flex-col items-center">
          <StarIcon className="w-10 h-10 text-[#0056A6] mb-3" />
          <h3 className="text-2xl font-bold text-gray-800">10+</h3>
          <p className="text-gray-600">Five Star Ratings</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
