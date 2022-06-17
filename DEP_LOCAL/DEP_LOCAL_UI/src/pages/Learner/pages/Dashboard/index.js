import React from "react";
import LearnerCards from "./Cards";
import Carousels from "./Carousels";
import CourseStatus from "./CourseStatus";

const Index = () => {
  return (
    <div className="scroll" >
      
       <LearnerCards />

       <br/>
       <Carousels />
<br/>
       <CourseStatus />
      
    </div>
  );
};

export default Index;
