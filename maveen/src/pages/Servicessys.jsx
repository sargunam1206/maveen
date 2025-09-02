import React from "react";
import { Workflow, ShieldCheck, ClipboardList } from "lucide-react";
import { motion } from "framer-motion";
import { ChevronDoubleRightIcon,} from "@heroicons/react/24/solid";
// import Services from "./pages/Services"; 

const Servicessys = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-8xl mx-auto text-center px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          System Improvement
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
            className="bg-white shadow-md rounded-2xl p-8 text-left hover:shadow-xl transition relative group"
          >
            <Workflow className="w-12 h-12 text-[#0056A6] mb-4 group-hover:text-blue-700 transition-colors" />
            <h3 className="text-xl font-semibold text-[#0056A6] mb-2">
            Store Management System
            </h3>
           <div className="flex items-start">
        <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
        <p>
          Training and implementation in 5s, Visual and Ergonomics
        </p>
      </div>
      <div className="flex items-start">
        <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
  <p> Product Families ,Color Coding , Identification of Items</p>
</div>


      <div className="flex items-start">
        <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
  <p>Store Layout to reduce movement and searching</p>
</div>

      <div className="flex items-start">
        <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
  <p>Bin Card System linked with BOM</p>
</div>

      <div className="flex items-start">
        <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
  <p>Material management system and kanban</p>
</div>


            <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#0056A6] group-hover:w-full transition-all rounded-b-2xl"></div>
          </motion.div>

          {/* Quality Improvements */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white shadow-md rounded-2xl p-8 text-left hover:shadow-xl transition relative group"
          >
            <ShieldCheck className="w-12 h-12 text-[#0056A6] mb-4 group-hover:text-blue-700 transition-colors" />
            <h3 className="text-xl font-semibold text-[#0056A6] mb-2">
              Total Productive Maintenance System
            </h3>
             <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
              <p> Breakdown maintenance tracking, Cost Analysis and Action Plan</p>
            </div>

              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
              <p> Overall Equipment Effectiveness (OEE), Loss Analysis, Action Plan to reduce loss and
payback</p>
            </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
              <p>Autonomous Maintenance and CUI / Sheet</p>
            </div>
            <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
              <p>Preventive Maintenance – Plan, Cost, Schedule and Effective execution</p>
            </div>
             <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
              <p> Mean Time Between Failure (MTBF)</p>
            </div>
            <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
              <p> Mean Time to Repair (MTTR)</p>
            </div>
            <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
              <p>Maintenance Space Management</p>
            </div>

      <div className="flex items-start">
        <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
  <p>Maintenance Budget</p>
</div>

            <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#0056A6] group-hover:w-full transition-all rounded-b-2xl"></div>
          </motion.div>

          
        </div>

      </div>
    </section>

  );
};

export default Servicessys;
