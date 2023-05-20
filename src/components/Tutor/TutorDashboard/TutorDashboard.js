import React from "react";
import SideBar from "./SideBar/SideBar";
import Classes from "./Classes/Classes";
import ChangePassword from "./Settings/ChangePassword";
import Notification from "./Settings/Notification";
import Calender from "./Calender/Calender";
import Statistics from "./Statistics/Statistics";
import Messages from "../../user/profile/Messages/Messages";
import About from "./Profile/About";
import Photo from "./Profile/Photo";
import Video from "./Profile/Video";
import Pricing from "./Profile/Pricing";
import Background from "./Profile/Background/Background";
import Description from "./Profile/Description";
import Subject from "./Profile/Subject";
import { useSelector } from "react-redux";

const TutorDashboard = ({ booking }) => {
  const selectedIndex = useSelector((state) => state.setting.selectedIndex);
  return (
    <>
      <div className="flex ">
        <div className="md:w-[235px] w-screen h-full">
          <SideBar />
        </div>

        <div className="md:basis-10/12  bg-[#fcf4f0]">
          {selectedIndex === 1 && <Messages booking={booking} />}
          {selectedIndex === 2 && <Classes booking={booking} />}
          {selectedIndex === 6 && <ChangePassword booking={booking} />}
          {selectedIndex === 9 && <Notification booking={booking} />}
          {selectedIndex === 3 && <Calender booking={booking} />}
          {selectedIndex === 4 && <Statistics booking={booking} />}
          {selectedIndex === 5 && <About booking={booking} />}
          {selectedIndex === 10 && <Photo booking={booking} />}
          {selectedIndex === 11 && <Video booking={booking} />}
          {selectedIndex === 12 && <Pricing booking={booking} />}
          {selectedIndex === 13 && <Background booking={booking} />}
          {selectedIndex === 14 && <Description booking={booking} />}
          {selectedIndex === 15 && <Subject booking={booking} />}
        </div>
      </div>
    </>
  );
};

export default TutorDashboard;
