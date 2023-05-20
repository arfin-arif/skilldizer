import React from "react";
import SideBar from "../SideBar/SideBar";
import Calender from "./Calender";

const MyCalendar = ({ booking }) => {
  return (
    <div>
      <div className="flex ">
        <div className="md:w-[235px] hidden md:block w-screen h-full">
          <SideBar />
        </div>

        <div className="md:basis-10/12  bg-[#fcf4f0]">
          <Calender booking={booking} />
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;
