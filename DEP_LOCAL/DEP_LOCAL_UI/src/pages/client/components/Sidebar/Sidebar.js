
import React, { useState } from "react";
 import {FaBook , FaGraduationCap ,FaRegUserCircle}  from "react-icons/fa";
// import * as FcIcons from "react-icons/fc";
// import * as AiIcons from "react-icons/ai";
// import * as GrIcons from "react-icons/gr";
// import * as ImIcons from "react-icons/im";
// import * as HiIcons from "react-icons/hi";
import { MdMonetizationOn } from 'react-icons/md';
import {BsPersonCircle} from 'react-icons/bs';
import {BiGridAlt} from 'react-icons/bi';
// import {FiSettings} from 'react-icons/fi'
import {GoSignOut} from 'react-icons/go'
import { NavLink } from "react-router-dom";
import {AiOutlineFileProtect}  from 'react-icons/ai';
// import Accordion from 'react-bootstrap/Accordion'


const Sidebar = ({ children }) => {
  

  const menuItem = [
   
    
    {
      path: "/clientDashboard",
      name: " DashBoard",
      icon:<BiGridAlt style={{color:"yellow", fontSize:'19px' }}/>,
     
    },

    {
      path: "/clientLearnerManagement",
      name: "Learner Management",
      icon: <FaBook style={{ fontSize:'19px' }}/>
      
    },
    
    {
      path: "/clientCourseManagement",
      name: "Course Management",
      icon:<FaGraduationCap  style={{ fontSize:'19px' }}/>
     
    },

    {
      path: "/clientPaymentInfo",
      name: "Payment Info",
      icon:<MdMonetizationOn  style={{ fontSize:'19px' }}/>
     
    },

    {
      path: "/clientProfile",
      name: "Client Profile",
      icon:<BsPersonCircle  style={{ fontSize:'19px' }}/>,
     
      
    },

    {
      path: "/clientReports",
      name: "Client Reports",
      icon:<AiOutlineFileProtect  style={{ fontSize:'19px' }}/>
     
    },
   
    {
      path: "/",
      name: "Sign Out",
     icon:<GoSignOut/>
    },

  ];

  return (
    <div className="container-fluid" style={{ marginLeft: "-15px",backgroundColor:"#f0f2f5"  }}>
      <div style={{ width:  "350px" ,backgroundColor:"#000000"}}  className="sidebar">
        <div className="top_section" >
          <div
            style={{ marginLeft: "200px" }}
            className="bars"
          >
          </div>
        </div>
        {/* <h5 align="center"> heading for side bar  </h5> */}
        {menuItem.map((item, index) => (
        
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: "block"  }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
