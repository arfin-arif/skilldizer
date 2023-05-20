import React from "react";
import SideBar from "../SideBar/SideBar";
import About from "./About";

const MyAbout = () => {
  return (
    <div>
      <div className="flex ">
        <div className="md:w-[235px] hidden md:block w-screen h-full">
          <SideBar />
        </div>

        <div className="md:basis-10/12  bg-[#fcf4f0]">
          <About />
        </div>
      </div>
    </div>
  );
};

export default MyAbout;
MyAbout.requireAuth = true;
