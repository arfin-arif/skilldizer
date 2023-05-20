import React from "react";
import SideBar from "../SideBar/SideBar";
import Message from "../../../user/profile/Messages/Messages";

const MyMessages = ({ booking }) => {
  return (
    <div>
      <div className="flex ">
        <div className="md:w-[235px] hidden md:block w-screen h-full">
          <SideBar />
        </div>

        <div className="md:basis-10/12  bg-[#fcf4f0]">
          <Message booking={booking} />
        </div>
      </div>
    </div>
  );
};

export default MyMessages;
