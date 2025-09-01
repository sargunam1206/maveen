import React from "react";
import { Workflow, ShieldCheck, ClipboardList } from "lucide-react";
import { motion } from "framer-motion";
import { ChevronDoubleRightIcon,} from "@heroicons/react/24/solid";
// import Services from "./pages/Services"; 

const Servicesqua = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-8xl mx-auto text-center px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Quality Improvement
        </h2>
        <p className="text-gray-600 mb-12">
          {/* We provide end-to-end solutions that drive your digital transformation */}
        </p>

        {/* Animated Flex Cards */}
        <div className="flex flex-col md:flex-row md:justify-center mt-4 gap-8">
          {/* Business Process Improvement */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gray-100 shadow-md rounded-2xl p-8 text-left hover:shadow-xl transition relative group"
          >
            <Workflow className="w-12 h-12 text-[#0056A6] mb-4 group-hover:text-blue-700 transition-colors" />
            <h3 className="text-xl font-semibold text-[#0056A6] mb-2">
             Strategic quality
            </h3>
           <div className="flex items-start">
        <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
        <p>
          Voice of Customer – Customer Complaint; New process / procedure / system development
        </p>
      </div>
      <div className="flex items-start">
        <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
  <p> Stop Time Quality Process from Diagram, PFMEA, Action plan for reduction in high IPPN which <br></br>results in Control Plan, Final Piece Inspection, Check list, Visual Work Instruction,<br></br>
               Visual TPM Sheet, Pole–cycle gauges for built in quality in production, Skill / Training Matrix, <br></br>
               CDPD reduction, Corrective &amp; Preventive action, Reports &amp;Capability mapping, Internal Audits.</p>
</div>


      <div className="flex items-start">
        <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
  <p>Establish Quality System from raw material to dispatch in line with DNS.</p>
</div>


            <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#0056A6] group-hover:w-full transition-all rounded-b-2xl"></div>
          </motion.div>

          {/* Quality Improvements */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gray-100 shadow-md rounded-2xl p-8 text-left hover:shadow-xl transition relative group"
          >
            <ShieldCheck className="w-12 h-12 text-[#0056A6] mb-4 group-hover:text-blue-700 transition-colors" />
            <h3 className="text-xl font-semibold text-[#0056A6] mb-2">
              7 QC Tools
            </h3>
             <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
              <p> Check Sheet</p>
            </div>

              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
              <p> Histogram</p>
            </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
              <p>Pareto Diagram</p>
            </div>
            <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
              <p> Cause &amp; Effect Diagram</p>
            </div>
             <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
              <p> Scatter Diagram</p>
            </div>
            <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
              <p> Stratification</p>
            </div>
            <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
              <p>Graphs &amp; Control Charts</p>
            </div>


            <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#0056A6] group-hover:w-full transition-all rounded-b-2xl"></div>
          </motion.div>

          
        </div>

     
      </div>
    </section>

  );
};

export default Servicesqua;
