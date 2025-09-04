import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faUsers,
  faCheckCircle,
  faDollarSign,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import mission from "../assets/mission.jpg"
import team from "../assets/team.jpg"

const About = () => {
  const lists =[
    {
      icon: <FontAwesomeIcon icon={faCheckCircle} className="text-white text-2xl" />,
      title:"Quality & Delivery",
      description:" Improving quality standards and delivery performance",
    },
    {
      icon:  <FontAwesomeIcon icon={faDollarSign} className="text-white text-2xl"/>,
      title:"Cost Reduction",
      description:"Reducing costs and eliminating non-value-adding steps",
    },
     {
      icon: <FontAwesomeIcon icon={faUsers} className="text-white text-2xl"/>,
      title:"Customer Relations",
      description:" Strengthening customer relationships and satisfaction",
    },
    {
      icon:<FontAwesomeIcon icon={faBolt} className="text-white text-2xl" />,
      title:" Process Optimization",
      description:" Optimizing processes with fewer resources",
    }

  ];

  const cards =[
    {
      icon:'1',
      title:"Diagnosis Study",
      discription:"Gap assessment",
    },{
      icon:"2",
      title:"5S Training",
      discription:"Implementation",
    },
    {
      icon:"3",
      title:"MIS Development ",
      discription:"Management Information Systems",
    },
    {
      icon:"4",
      title:"Quality Management",
      discription:"System Improvement"
    },
    {
      icon:"5",
      title:"TPM Implementation",
      discription:"Total Productive Maintenance",
    },
    {
      icon:"6",
      title:"Productivity Management",
      discription:"Inventory Management",
    },{
      icon:"7",
      title:"Kaizen & Loan",
      discription:"Practice",
    },
    {
      icon:"8",
      title:"HR Development",
      discription:"Human Resource Development"
    }
  ]
  return (
    <>
      <div className="border-b border-gray-400">
        <section className=" border-gray-700 flex flex-col justify-center items-center py-10 px-6 text-center"  data-aos="zoom-in">
          <h1 className="text-4xl text-[#0050A0] font-bold mb-4">
            About Maven Yanim
          </h1>
 <p className="text-xl text-maven-gray max-w-3xl mx-auto leading-relaxed">            
            Professional consulting firm delivering specialized services across
            multiple industries through Operational Excellence.
          </p>
        </section>
       
              <div className="flex flex-col justify-center items-center py-10 px-6 bg-gray-200">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#0050A0] font-bold mb-4 mt-5 text-center">
          Who We Are
        </h1>
        <p className="p-6 w-full max-w-3xl bg-white rounded-lg font-medium text-sm sm:text-base md:text-lg text-center sm:text-left">
          Maven Yanim is a professional consulting firm delivering specialized
          services across{" "}
          <span className="text-[#0050A0]">
            Engineering, Automotive, Textile, Food, and Consumer Goods
          </span>{" "}
          industries. We focus on helping businesses implement World Class
          Manufacturing Practices through Operational Excellence (OpEx) projects.
        </p>
      </div>

{/* <div className="flex flex-col justify-center items-center py-10 px-6">
  <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#0050A0] font-bold mb-4 mt-5 text-center">
    Our Mission
  </h1>
  <p className="bg-[#0050A0] text-white p-6 sm:p-8 w-full max-w-3xl rounded-lg text-sm sm:text-base md:text-lg text-center font-medium">
    To empower organizations to achieve sustainable growth by improving
    efficiency, productivity, and quality.
  </p>
</div> */}
   <h1 className="text-2xl sm:text-3xl md:text-4xl text-center text-[#0050A0] mt-8  font-bold mb-4">
      Our Mission
    </h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-10 px-6" data-aos="zoom-in">
  
  {/* Left Content */}
  <div className="flex flex-col justify-center">
 
    <p className="bg-[#0050A0] text-white p-6 sm:p-8 rounded-lg text-sm sm:text-base md:text-lg font-medium">
      To empower organizations to achieve sustainable growth by improving
      efficiency, productivity, and quality.
    </p>
  </div>

  {/* Right Image */}
  <div className="flex justify-center" >
    <img src={mission} alt="Our Mission" className="w-full max-w-md rounded-lg border-2 border-[#0050A0]  hover:shadow-md hover:scale-105 transition transform duration-300" />
  </div>
</div>

<div className="flex flex-col justify-center items-center py-10 px-6 bg-gray-200">
  <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#0050A0] font-bold mb-4 mt-5 text-center">
    Our Team
  </h1>

  {/* Main container */}
  <div className="flex flex-col sm:flex-row items-center gap-6 bg-white rounded-lg p-6 w-full max-w-5xl" data-aos="zoom-in">

    {/* Left Side: Image */}
    <div className="w-full sm:w-1/2  h-75 flex justify-center">
      <img
        src={team}
        alt="Team"
        className="rounded-lg shadow-md"
      />
    </div>

    {/* Right Side: Icon + Content */}
    <div className="w-full sm:w-1/2 flex flex-col sm:flex-row items-start  gap-3">
     
      <p className="text-gray-700 font-medium text-sm sm:text-base md:text-lg text-left">
        <FontAwesomeIcon
        icon={faUsers}
        className="text-[#D62828] text-3xl sm:text-4xl pr-4 "
      /> Our consultants bring extensive experience and have
        successfully implemented OpEx projects for over{" "}
        <span className="text-[#D62828]">40 industries since 2014.</span> With a
        blend of global standards and local expertise, we ensure impactful
        training, consulting, and process improvement.
      </p>
    </div>
  </div>
</div>


        <div className="flex flex-col justify-center items-center py-2 px-6 text-center">
          <h1 className="text-[#0050A0] font-bold text-4xl mb-5 mt-4">
            Operational Excellence (OpEx)
          </h1>
          <p className="p-3 text-xl max-w-3xl">
            We help businesses implement continuous improvement across all
            aspects of operations by:
          </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-10 py-15">
          { lists.map((list,index)=>(
            <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-red-600 flex flex-col justify-center items-center text-center hover:shadow-lg hover:scale-105  transition trnsform duration-300" key={index}
            data-aos="fade-up">
              <div className="w-15 h-15 bg-red-600 text-whit rounded-lg flex items-center justify-center">{list.icon}</div>
              <h3 className="text-[#0050A0] mb-3 font-bold">{list.title}</h3>
              <p className="mb-3">{list.description}</p>
            </div>
          ))}
          </div>
        
        
        <div className="flex flex-col justify-center items-center bg-gray-200">
          <h1 className="text-4xl text-[#0050A0] mb-5 mt-6 font-bold">
            Our Methodology
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-5">
            {cards.map((cards,index)=>(
              <div className=" bg-white  rounded-lg p-4 hover:shadow-lg md:hover" key={index} data-aos="fade-down">
                <div className="bg-[#0050A0] text-white font-bold p-4 rounded-lg w-15 h-15 flex justify-center items-center ">{cards.icon}</div>
                <h3 className="text-[#0050A0] font-bold mb-3 mt-2">{cards.title}</h3>
                <p className="mb-3">{cards.discription}</p>
              </div>
            ))}
          </div>
         
        </div>
        {/* <div className="flex flex-col justify-center items-center bg-[#0050A0] text-white">
          <h1 className="text-4xl font-bold mb-4 mt-4">
            Ready to Transform Your Operations?
          </h1>
          <p className="text-2xl w-200 text-center p-5 ">
            Let's discuss how Maven Yanim can help your organization achieve
            operational excellence and sustainable growth.
          </p>
          <div className="flex space-x-4 mb-5">
            <button className="bg-red-600 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-red-700 transition">
              Get Started
            </button>
            <button className="border-2 border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-blue-700 transition">
              Learn More
            </button>
          </div>
        </div> */}
        <div className="flex flex-col justify-center items-center bg-[#0050A0] text-white px-6">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 mt-4 text-center">
    Ready to Transform Your Operations?
  </h1>
  <p className="text-base sm:text-lg md:text-2xl w-full max-w-2xl text-center p-3">
    Let's discuss how Maven Yanim can help your organization achieve
    operational excellence and sustainable growth.
  </p>
  <div className="flex flex-col sm:flex-row gap-4 mb-6 mt-3">
    <button className="bg-red-600 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-red-700 transition">
      <Link to="/contact">Get Started</Link>
    </button>
    <button className="border-2 border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-blue-700 transition">
      <Link to="/services">Learn More</Link>
    </button>
  </div>
  
</div>

      </div>
    </>
  );
};

export default About;