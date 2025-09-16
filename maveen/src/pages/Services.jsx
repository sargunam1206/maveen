import React from "react";
import { 
  Workflow, 
  ShieldCheck, 
  ClipboardList, 
  Factory,
  Target,
  BarChart3,
  Warehouse,
  Wrench,
  Layout,
  TrendingUp,
  PieChart,
  DollarSign
} from "lucide-react";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="border-gray-700 flex flex-col justify-center items-center py-4 md:py-10 px-4 md:px-6 text-center"
      >
        <h1 className="text-xl md:text-[28px] text-[#0050A0] font-bold mb-4">
          Services
        </h1>
        <p className="p-4 md:p-6 w-full max-w-3xl bg-white rounded-lg font-semibold text-sm sm:text-base md:text-lg text-justify ">            
          {/* Our services are crafted with your success in mind, ensuring innovative solutions that adapt to your unique challenges. */}
          We design our services with your success at the center, offering solutions that address your unique challenges.
Through innovation and strategic thinking, we deliver results that create real value and long-term impact.
Our goal is to empower you with tailored solutions that drive growth and efficiency.
        </p>
      </motion.section>

      {/* Business Process Improvement Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={containerVariants}
        className="bg-gray-50 py-8 md:py-8"
      >
        <div className="max-w-8xl mx-auto text-center px-4 md:px-6">
          <motion.h2 variants={itemVariants} className="text-2xl md:text-[28px] text-[#0050A0] font-bold mb-7">
            Business Process Improvement
          </motion.h2>
          
          <motion.div variants={containerVariants} className="flex flex-col md:flex-row md:justify-center gap-6 md:gap-8 mt-2 md:mt-8">
            {/* Lean Manufacturing */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="w-full max-w-md md:w-[450px] bg-white shadow-md rounded-2xl p-6 md:p-8 text-justify hover:shadow-xl transition relative group"
            >
              <Factory className="w-10 h-10 md:w-12 md:h-12 text-[#D62828] mb-4 group-hover:text-red-700 transition-colors" />
              <h3 className="text-lg md:text-xl font-semibold text-[#0056A6] mb-2">
                Lean Manufacturing
              </h3>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">5S &amp; Visual Management</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Total Productive Maintenance (TPM)</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Quick Change Over (SMED)</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Quality Improvement (DMAIC, 8D)</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Continuous Flow</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Pull Production System (PPC, Heijunka, Kanban)</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Daily Work Management</p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#0056A6] group-hover:w-full transition-all rounded-b-2xl"></div>
            </motion.div>

            {/* Total Quality Management */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="w-full max-w-md md:w-[400px] bg-white shadow-md rounded-2xl p-6 md:p-8 text-justify hover:shadow-xl transition relative group mt-6 md:mt-0"
            >
              <Target className="w-10 h-10 md:w-12 md:h-12 text-[#D62828] mb-4 group-hover:text-red-700 transition-colors" />
              <h3 className="text-lg md:text-xl font-semibold text-[#0056A6] mb-2">
                Total Quality Management
              </h3>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">TQM overview for Senior Leaders</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Formation of TQM Steering Committee</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Training of Steering Committee Members</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Diagnostic Survey and Gap Identification</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Strategy workshops</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">TQM Application Assessments</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Need Based Training and Facilitation</p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#0056A6] group-hover:w-full transition-all rounded-b-2xl"></div>
            </motion.div>

            {/* Six Sigma */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="w-full max-w-md md:w-[400px] bg-white shadow-md rounded-2xl p-6 md:p-8 text-justify hover:shadow-xl transition relative group mt-6 md:mt-0"
            >
              <BarChart3 className="w-10 h-10 md:w-12 md:h-12 text-[#D62828] mb-4 group-hover:text-red-700 transition-colors" />
              <h3 className="text-lg md:text-xl font-semibold text-[#0056A6] mb-2">
                Six Sigma
              </h3>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Define</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Measure</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Analyze</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Improve</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Control</p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#0056A6] group-hover:w-full transition-all rounded-b-2xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Quality Improvement Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={containerVariants}
        className="bg-white py-12 md:py-16"
      >
        <div className="max-w-8xl mx-auto text-center px-4 md:px-6">
          <motion.h2 variants={itemVariants} className="text-2xl md:text-[28px] font-bold text-[#0050A0] mb-4">
            Quality Improvement
          </motion.h2>

          <motion.div variants={containerVariants} className="flex flex-col md:flex-row md:justify-center mt-6 md:mt-8 gap-6 md:gap-8">
            {/* Strategic Quality */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="w-full md:w-[950px] bg-gray-100 shadow-md rounded-2xl p-6 md:p-8 text-justify hover:shadow-xl transition relative group"
            >
              <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 text-[#D62828] mb-4 group-hover:text-red-700 transition-colors" />
              <h3 className="text-lg md:text-xl font-semibold text-[#0056A6] mb-2">
                Strategic Quality
              </h3>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-7 h-5 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Voice of Customer – Customer Complaint; New process / procedure / system development</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-29 h-4 md:w-18 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Shop Quality-Process from Diagram, PFMEA, Action plan for reduction in high RPN which results in Control Plan, First Piece Inspection, Check list, Visual Work Instruction, Visual TPM Sheet, Poka-yoke gauges for built-in quality in production, Skill / Training Matrix, COPQ reduction, Corrective &amp; Preventive action, Reports &amp; Capability mapping, Internal Audits.</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-7 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Establish Quality System from raw material to dispatch in line with QMS.</p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#0056A6] group-hover:w-full transition-all rounded-b-2xl"></div>
            </motion.div>

            {/* 7 QC Tools */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="w-full max-w-md md:w-[350px] bg-gray-100 shadow-md rounded-2xl p-6 md:p-8 text-justify hover:shadow-xl transition relative group mt-6 md:mt-0"
            >
              <ClipboardList className="w-10 h-10 md:w-12 md:h-12 text-[#D62828] mb-4 group-hover:text-red-700 transition-colors" />
              <h3 className="text-lg md:text-xl font-semibold text-[#0056A6] mb-2">
                7 QC Tools
              </h3>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Check Sheet</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Histogram</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Pareto Diagram</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Cause &amp; Effect Diagram</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Scatter Diagram</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Stratification</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Graphs &amp; Control Charts</p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#0056A6] group-hover:w-full transition-all rounded-b-2xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* System Improvement Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={containerVariants}
        className="bg-gray-50 py-12 md:py-16"
      >
        <div className="max-w-8xl mx-auto text-center px-4 md:px-6">
          <motion.h2 variants={itemVariants} className="text-2xl md:text-[28px] font-bold text-[#0050A0] mb-4">
            System Improvement
          </motion.h2>

          <motion.div variants={containerVariants} className="flex flex-col md:flex-row md:justify-center mt-6 md:mt-8 gap-6 md:gap-8">
            {/* Store Management System */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="w-full md:w-[550px] bg-white shadow-md rounded-2xl p-6 md:p-8 text-justify hover:shadow-xl transition relative group"
            >
              <Warehouse className="w-10 h-10 md:w-12 md:h-12 text-[#D62828] mb-4 group-hover:text-red-700 transition-colors" />
              <h3 className="text-lg md:text-xl font-semibold text-[#0056A6] mb-2">
                Store Management System
              </h3>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Training and implementation in 5s, Visual Management and Ergonomics</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Product Families, Color Coding, Identification of Items</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Store Layout to reduce movement and searching</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Bin Card System linked with BOM</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Material Management system and Kanban</p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#0056A6] group-hover:w-full transition-all rounded-b-2xl"></div>
            </motion.div>

            {/* Total Productive Maintenance System */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="w-full md:w-[750px] bg-white shadow-md rounded-2xl p-6 md:p-8 text-justify hover:shadow-xl transition relative group mt-6 md:mt-0"
            >
              <Wrench className="w-10 h-10 md:w-12 md:h-12 text-[#D62828] mb-4 group-hover:text-red-700 transition-colors" />
              <h3 className="text-lg md:text-xl font-semibold text-[#0056A6] mb-2">
                Total Productive Maintenance System
              </h3>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-6 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Breakdown maintenance tracking, Cost Analysis and Action Plan</p>
              </div>
              {/* <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-8 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Overall Equipment Effectiveness (OEE), Loss Analysis, Action Plan to reduce loss and payback</p>
              </div> */}
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Autonomous Maintenance and CLIT  Sheet</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-7 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Preventive Maintenance – Plan, Cost, Schedule and Effective execution</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Mean Time Between Failure (MTBF)</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Mean Time to Repair (MTTR)</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Maintenance Spare Management</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Maintenance Budget</p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#0056A6] group-hover:w-full transition-all rounded-b-2xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Workplace Improvement Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={containerVariants}
        className="bg-white py-12 md:py-16"
      >
        <div className="max-w-8xl mx-auto text-center px-4 md:px-6">
          <motion.h2 variants={itemVariants} className="text-2xl md:text-[28px] font-bold text-[#0050A0] mb-4">
            Workplace Improvement
          </motion.h2>

          <motion.div variants={containerVariants} className="flex flex-col md:flex-row md:justify-center mt-6 md:mt-8 gap-6 md:gap-8">
            {/* Manufacturing Layouts */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="w-full md:w-[850px] bg-gray-100 shadow-md rounded-2xl p-6 md:p-8 text-justify hover:shadow-xl transition relative group"
            >
              <Layout className="w-10 h-10 md:w-12 md:h-12 text-[#D62828] mb-4 group-hover:text-red-700 transition-colors" />
              <h3 className="text-lg md:text-xl font-semibold text-[#0056A6] mb-2">
                Manufacturing Layouts
              </h3>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-8 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Assessment of current layout for space, distance, lead time, WIP, capacity and manpower</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-9 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Layout design for capacity enhancement, Reduction in Muda, Mura, Muri, Visual Management &amp; Flexibility</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-18 h-4 md:w-10 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Plant layout using Heijunka and Lean concept such as Value Stream Map, Route Map - Seiryu'ka, reduction in Main &amp; material movement, operator utilization (MOP), TAKT time, FIFO, Floor Space utilization, Quality - TPM aspect</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-8 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Individual cell optimization, Line balancing, Lead time reduction, Productivity Improvement</p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#0056A6] group-hover:w-full transition-all rounded-b-2xl"></div>
            </motion.div>

            {/* Productivity Improvement */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="w-full max-w-md md:w-[450px] bg-gray-100 shadow-md rounded-2xl p-6 md:p-8 text-justify hover:shadow-xl transition relative group mt-6 md:mt-0"
            >
              <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-[#D62828] mb-4 group-hover:text-red-700 transition-colors" />
              <h3 className="text-lg md:text-xl font-semibold text-[#0056A6] mb-2">
                Productivity Improvement on shop floor
              </h3>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Quick Change Over (SMED)</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Standard Work Combination Table (SWCT)</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Single piece flow</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Ergonomics</p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#0056A6] group-hover:w-full transition-all rounded-b-2xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Daily Work & Cost Management Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={containerVariants}
        className="bg-gray-50 py-12 md:py-16"
      >
        <div className="max-w-8xl mx-auto text-center px-4 md:px-6">
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-[#0050A0] mb-4">
            Daily Work & Cost management
          </motion.h2>

          <motion.div variants={containerVariants} className="flex flex-col md:flex-row md:justify-center mt-6 md:mt-8 gap-6 md:gap-8">
            {/* Daily Work Management */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="w-full md:w-[650px] bg-white shadow-md rounded-2xl p-6 md:p-8 text-justify hover:shadow-xl transition relative group mt-6 md:mt-0"
            >
              <ClipboardList className="w-10 h-10 md:w-12 md:h-12 text-[#D62828] mb-4 group-hover:text-red-700 transition-colors" />
              <h3 className="text-xl md:text-xl font-semibold text-[#0056A6] mb-2">
                Daily work management and Sustenance:
              </h3>
              <h4 className="text-lg md:text-lg font-semibold text-[#0056A6] mb-2">
                KRA Tracking and Sustenance
              </h4>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Develop tracking of machine performance / OEE</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Develop tracking of operator performance</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Develop tracking of staff performance</p>
              </div>
              {/* <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-6 h-4  md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Develop a mechanism for daily data collection for all types of KPI / KRA</p>
              </div> */}
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Develop review and analysis mechanism</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Graph the actual versus the plan every day</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Build up daily upto date of month Pareto chart</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Prepare action plan and track progress</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Alignment to Vision, Mission and Organization Goal</p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#0056A6] group-hover:w-full transition-all rounded-b-2xl"></div>
            </motion.div>

            {/* Cost Management */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="w-full md:w-[650px] bg-white shadow-md rounded-2xl p-6 md:p-8 text-justify hover:shadow-xl transition relative group mt-6 md:mt-0"
            >
              <DollarSign className="w-10 h-10 md:w-12 md:h-12 text-[#D62828] mb-4 group-hover:text-red-700 transition-colors" />
              <h3 className="text-xl md:text-xl font-semibold text-[#0056A6] mb-2">
                Cost management:
              </h3>
              <h4 className="text-lg md:text-lg font-semibold text-[#0056A6] mb-2">
                Data Analytics and Budgeting
              </h4>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-7 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Develop a mechanism for daily cost data collection for all types of costs and overheads</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-13 h-4 md:w-7 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Develop cost review and analysis mechanism to determine cost variance and profit variance identify, prioritize &amp; execute to reduce the cost variances</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-7 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Develop various cost related indices (like VAPCO, etc.) and tracking of the same</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-10 h-4 md:w-5 md:h-5 text-[#0056A6] mt-1 mr-2" />
                <p className="text-sm md:text-base">Allocate monthly cost budgets to each function linking cost / profit mechanism to KRA / KPI tracking</p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#0056A6] group-hover:w-full transition-all rounded-b-2xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Services;