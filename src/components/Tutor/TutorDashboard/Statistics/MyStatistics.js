import React from "react";
import SideBar from "../SideBar/SideBar";
import Statistics from "./Statistics";

const MyClasses = ({ booking }) => {
  return (
    <div>
      <div className="flex ">
        <div className="md:w-[235px] w-full h-full">
          <SideBar />
        </div>
        <div className="md:basis-10/12  bg-[#fcf4f0]">
          <Statistics booking={booking} />
        </div>
      </div>
    </div>
  );
};

export default MyClasses;
