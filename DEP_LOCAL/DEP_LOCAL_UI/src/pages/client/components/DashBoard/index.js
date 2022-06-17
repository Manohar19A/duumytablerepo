import React from "react";
import Sidebar from "../Sidebar/Sidebar"
// import SideBar from "../../SideBar/SideBar";
import Cardd from '../ClientCard/ClientCard';
import Tablee from '../ClientTable/ClientTable';


const Index = () => {
    return (
        <div className="scroll">
            
                <Cardd />
                <Tablee />
            
        </div>
    )
}
export default Index;
