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
        className="border-gray-700 flex flex-col justify-center items-center py-10 px-6 text-center"
      >
        <h1 className="text-4xl text-[#0050A0] font-bold mb-4">
          Services
        </h1>
        <p className="p-6 w-full max-w-3xl bg-white rounded-lg font-semibold text-sm sm:text-base md:text-lg text-center sm:text-left">            
          Our services are crafted with your success in mind, ensuring innovative solutions that adapt to your unique challenges.
        </p>
      </motion.section>

      {/* Business Process Improvement Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }} // Removed once: true to trigger on every scroll
        variants={containerVariants}
        className="bg-gray-50 py-16"
      >
        <div className="max-w-8xl mx-auto text-center px-6">
          <motion.h2 variants={itemVariants} className="text-3xl text-[#0050A0] font-bold mb-4">
            Business Process Improvement
          </motion.h2>
          
          <motion.div variants={containerVariants} className="flex flex-col md:flex-row md:justify-center gap-8 mt-8">
            {/* Lean Manufacturing */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="w-[450px] bg-white shadow-md rounded-2xl p-8 text-left hover:shadow-xl transition relative group"
            >
              <Factory className="w-12 h-12 text-[#D62828] mb-4 group-hover:text-red-700 transition-colors" />
              <h3 className="text-xl font-semibold text-[#0056A6] mb-2">
                Lean Manufacturing
              </h3>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>5S &amp; Visual Management</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>TPM</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>SMED</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>DMAIC</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>PPC</p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#0056A6] group-hover:w-full transition-all rounded-b-2xl"></div>
            </motion.div>

            {/* Total Quality Management */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="w-[400px] bg-white shadow-md rounded-2xl p-8 text-left hover:shadow-xl transition relative group"
            >
              <Target className="w-12 h-12 text-[#D62828] mb-4 group-hover:text-red-700 transition-colors" />
              <h3 className="text-xl font-semibold text-[#0056A6] mb-2">
                Total Quality Management
              </h3>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>TQM overview</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Strategy workshops</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>TQM Application Assessments</p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#0056A6] group-hover:w-full transition-all rounded-b-2xl"></div>
            </motion.div>

            {/* Six Sigma */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="w-[400px] bg-white shadow-md rounded-2xl p-8 text-left hover:shadow-xl transition relative group"
            >
              <BarChart3 className="w-12 h-12 text-[#D62828] mb-4 group-hover:text-red-700 transition-colors" />
              <h3 className="text-xl font-semibold text-[#0056A6] mb-2">
                Six Sigma
              </h3>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Define</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Measure</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Analyze</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Improve</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Control</p>
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
        viewport={{ amount: 0.3 }} // Removed once: true to trigger on every scroll
        variants={containerVariants}
        className="bg-white py-16"
      >
        <div className="max-w-8xl mx-auto text-center px-6">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-[#0050A0] mb-4">
            Quality Improvement
          </motion.h2>

          <motion.div variants={containerVariants} className="flex flex-col md:flex-row md:justify-center mt-8 gap-8">
            {/* Strategic Quality */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="w-[950px] bg-gray-100 shadow-md rounded-2xl p-8 text-left hover:shadow-xl transition relative group"
            >
              <ShieldCheck className="w-12 h-12 text-[#D62828] mb-4 group-hover:text-red-700 transition-colors" />
              <h3 className="text-xl font-semibold text-[#0056A6] mb-2">
                Strategic Quality
              </h3>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Voice of Customer – Customer Complaint; New process / procedure / system development</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-15 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Stop Time Quality Process from Diagram, PFMEA, Action plan for reduction in high IPPN which results in Control Plan, Final Piece Inspection, Check list, Visual Work Instruction, Visual TPM Sheet, Pole–cycle gauges for built in quality in production, Skill / Training Matrix, CDPD reduction, Corrective &amp; Preventive action, Reports &amp;Capability mapping, Internal Audits.</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Establish Quality System from raw material to dispatch in line with DNS.</p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#0056A6] group-hover:w-full transition-all rounded-b-2xl"></div>
            </motion.div>

            {/* 7 QC Tools */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="w-[350px] bg-gray-100 shadow-md rounded-2xl p-8 text-left hover:shadow-xl transition relative group"
            >
              <ClipboardList className="w-12 h-12 text-[#D62828] mb-4 group-hover:text-red-700 transition-colors" />
              <h3 className="text-xl font-semibold text-[#0056A6] mb-2">
                7 QC Tools
              </h3>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Check Sheet</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Histogram</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Pareto Diagram</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Cause &amp; Effect Diagram</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Scatter Diagram</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Stratification</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Graphs &amp; Control Charts</p>
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
        viewport={{ amount: 0.3 }} // Removed once: true to trigger on every scroll
        variants={containerVariants}
        className="bg-gray-50 py-16"
      >
        <div className="max-w-8xl mx-auto text-center px-6">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-[#0050A0] mb-4">
            System Improvement
          </motion.h2>

          <motion.div variants={containerVariants} className="flex flex-col md:flex-row md:justify-center mt-8 gap-8">
            {/* Store Management System */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="w-[550px] bg-white shadow-md rounded-2xl p-8 text-left hover:shadow-xl transition relative group"
            >
              <Warehouse className="w-12 h-12 text-[#D62828] mb-4 group-hover:text-red-700 transition-colors" />
              <h3 className="text-xl font-semibold text-[#0056A6] mb-2">
                Store Management System
              </h3>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Training and implementation in 5s, Visual and Ergonomics</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Product Families, Color Coding, Identification of Items</p>
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

            {/* Total Productive Maintenance System */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="w-[750px] bg-white shadow-md rounded-2xl p-8 text-left hover:shadow-xl transition relative group"
            >
              <Wrench className="w-12 h-12 text-[#D62828] mb-4 group-hover:text-red-700 transition-colors" />
              <h3 className="text-xl font-semibold text-[#0056A6] mb-2">
                Total Productive Maintenance System
              </h3>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Breakdown maintenance tracking, Cost Analysis and Action Plan</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Overall Equipment Effectiveness (OEE), Loss Analysis, Action Plan to reduce loss and payback</p>
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
                <p>Mean Time Between Failure (MTBF)</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Mean Time to Repair (MTTR)</p>
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
          </motion.div>
        </div>
      </motion.section>

      {/* Workplace Improvement Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }} // Removed once: true to trigger on every scroll
        variants={containerVariants}
        className="bg-white py-16"
      >
        <div className="max-w-8xl mx-auto text-center px-6">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-[#0050A0] mb-4">
            Workplace Improvement
          </motion.h2>

          <motion.div variants={containerVariants} className="flex flex-col md:flex-row md:justify-center mt-8 gap-8">
            {/* Manufacturing Layouts */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="w-[850px] bg-gray-100 shadow-md rounded-2xl p-8 text-left hover:shadow-xl transition relative group"
            >
              <Layout className="w-12 h-12 text-[#D62828] mb-4 group-hover:text-red-700 transition-colors" />
              <h3 className="text-xl font-semibold text-[#0056A6] mb-2">
                Manufacturing Layouts
              </h3>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Assessment of current layout for space, distance, lead time, VPN capacity and manpower</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Layout design for capacity enhancement, Reduction in Muda, Mura, Muri, Visual Management &amp; Flexibility</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Plant layout using Heijunka and Lean concept such as Value Stream Map, Route Map, Gemba Walk, reduction in data &amp; material movement, operator utilization (MOP), TAKT time, FIFO, Floor Space utilization, Quality - TPM aspect</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Individual cell optimization, Line balancing, Lead time reduction, Productivity Improvement</p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#0056A6] group-hover:w-full transition-all rounded-b-2xl"></div>
            </motion.div>

            {/* Productivity Improvement */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="w-[450px] bg-gray-100 shadow-md rounded-2xl p-8 text-left hover:shadow-xl transition relative group"
            >
              <TrendingUp className="w-12 h-12 text-[#D62828] mb-4 group-hover:text-red-700 transition-colors" />
              <h3 className="text-xl font-semibold text-[#0056A6] mb-2">
                Productivity Improvement on shop floor
              </h3>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>SMED</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>SWCT</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Single piece flow</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Ergonomics</p>
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
        viewport={{ amount: 0.3 }} // Removed once: true to trigger on every scroll
        variants={containerVariants}
        className="bg-gray-50 py-16"
      >
        <div className="max-w-8xl mx-auto text-center px-6">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-[#0050A0] mb-4">
            Daily Work & Cost management
          </motion.h2>

          <motion.div variants={containerVariants} className="flex flex-col md:flex-row md:justify-center mt-8 gap-8">
            {/* Daily Work Management */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="w-[450px] bg-white shadow-md rounded-2xl p-8 text-left hover:shadow-xl transition relative group"
            >
              <ClipboardList className="w-12 h-12 text-[#D62828] mb-4 group-hover:text-red-700 transition-colors" />
              <h3 className="text-xl font-semibold text-[#0056A6] mb-2">
                Daily work management and Sustenance:
              </h3>
              <h4 className="text-xl font-semibold text-[#0056A6] mb-2">
                KPI Tracking and Sustenance
              </h4>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Develop tracking of machine performance / OEE</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Develop tracking of product performance</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Develop tracking of staff performance</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Develop a mechanism for daily data collection for all types of KPI / KRA</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Develop review and analysis mechanism</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Graph the actual items; the plan every day</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Build up daily up to date of month Pareto chart</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Prepare action plan and track progress</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Alignment to Vision, Mission and Organization Goal</p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#0056A6] group-hover:w-full transition-all rounded-b-2xl"></div>
            </motion.div>

            {/* Cost Management */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="w-[850px] bg-white shadow-md rounded-2xl p-8 text-left hover:shadow-xl transition relative group"
            >
              <DollarSign className="w-12 h-12 text-[#D62828] mb-4 group-hover:text-red-700 transition-colors" />
              <h3 className="text-xl font-semibold text-[#0056A6] mb-2">
                Cost management:
              </h3>
              <h4 className="text-xl font-semibold text-[#0056A6] mb-2">
                Data Analytics and Budgeting
              </h4>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Develop a mechanism for daily cost data collection for all types of costs and overheads</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Develop cost review and analysis mechanism to determine cost variance and profit variance identify, prioritize &amp; execute to reduce the cost variances</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Develop various cost related indices (like VAPCO, etc.) and tracking of the same</p>
              </div>
              <div className="flex items-start">
                <ChevronDoubleRightIcon className="w-5 h-5 text-[#0056A6] mt-1 mr-2" />
                <p>Allocate monthly cost budgets to each function linking cost / profit mechanism to KRA / KPI tracking</p>
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