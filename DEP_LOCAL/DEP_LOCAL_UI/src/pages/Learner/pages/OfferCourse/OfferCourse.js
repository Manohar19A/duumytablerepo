import React from "react";
import LearnerTable from "./LearnerTable";
import Sidebar from "../../Navbar/Sidebar"

const Offercourse = () => {
  return (
    <div>
      <Sidebar>
        <h1>Offer Course Details</h1>
        <LearnerTable/>
      </Sidebar>
    </div>
  );
};

export default Offercourse;
