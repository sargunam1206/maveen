import React from "react";
import { UserGroupIcon, BriefcaseIcon, StarIcon } from "@heroicons/react/24/solid";
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer";

const Stats = () => {

  const { ref, inView } = useInView({
    triggerOnce: true, // run only once
    threshold: 1,    // 50% visible
  });

  
  return (
    // <section className="bg-gray-100 py-16">
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        
        {/* Clients */}
        {/* <div className="flex flex-col items-center shadow-lg rounded-lg p-4" data-aos="flip-left">
          <UserGroupIcon className="w-10 h-10 text-[#D62828] mb-3" />
          <h3 className="text-2xl font-bold text-gray-800">14+</h3>
          <p className="text-gray-600">Clients</p>
        </div> */}
        <div
          ref={ref}
          className="flex flex-col items-center shadow-lg rounded-lg p-4"
          data-aos="flip-left"
        >
          <UserGroupIcon className="w-10 h-10 text-[#D62828] mb-3" />
          <h3 className="text-2xl font-bold text-gray-800">
            {inView ? <CountUp end={14} duration={2} /> : "0"}+
          </h3>
          <p className="text-gray-600">Clients</p>
        </div>

         {/* Services */}
        <div className="flex flex-col items-center shadow-lg rounded-lg p-4" ref={ref} data-aos="flip-right">
          <BriefcaseIcon className="w-10 h-10 text-[#D62828] mb-3" />
          <h3 className="text-2xl font-bold text-gray-800">
            {inView ? <CountUp end={10} duration={2} /> : "0"}+

          </h3>
          <p className="text-gray-600">Total Services</p>
        </div>


        {/* Ratings */}
        <div className="flex flex-col items-center shadow-lg rounded-lg" ref={ref} data-aos="flip-left">
          <StarIcon className="w-10 h-10 text-[#D62828] mb-3" />
          <h3 className="text-2xl font-bold text-gray-800">
           {inView ? <CountUp end={10} duration={2} /> : "0"}+

          </h3>
          <p className="text-gray-600">Five Star Ratings</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
