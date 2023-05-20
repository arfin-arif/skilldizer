import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../../store/actions/userAction";
import Router from "next/router";
import { openAlert } from "../../../../store/reducer/alertReducer";

import { updateTutorProfileActive } from "../../../../store/actions/tutorAction";
import {
  clearError,
  clearSuccess,
} from "../../../../store/reducer/tutorReducer";

// * Icons and Images
import Image from "next/image";
import tutorImage from "../../../../../public/images/profile_image.png";
import { FiMail } from "react-icons/fi";
import { FiBookOpen } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { FiBarChart2 } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { CgLogOut } from "react-icons/cg";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { FiToggleRight } from "react-icons/fi";
import { FiToggleLeft } from "react-icons/fi";
import {
  toggleProfileOptions,
  setSelectedIndex,
  toggleSettingOptions,
} from "../../../../store/reducer/settingsReducer";
import DeleteConfirmationModal from "../../../Modals/DeleteCondirmation.modal";

const SideBar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { error, message } = useSelector((state) => state.tutor);
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const { showProfileOptions, showSettingOptions, selectedIndex } = useSelector(
    (state) => state.setting
  );

  const handleToggle = () => {
    setToggle(!toggle);
    dispatch(updateTutorProfileActive(toggle));
  };

  useEffect(() => {
    if (error) {
      dispatch(openAlert({ severity: "error", message: error }));
      dispatch(clearError());
      return;
    }

    if (message) {
      dispatch(openAlert({ severity: "success", message: message }));
      dispatch(clearSuccess());
    }
  }, [error, message, dispatch]);

  const iconStyle = { color: "#FF5A00" };
  const icon2Style = { color: "#D1D1D1" };

  return (
    <div className="bg-[#FFFFFF] w-[235px] flex flex-col md:items-center py-2 space-y-2 h-screen">
      {user && (
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={user?.avatar?.url ? user?.avatar?.url : tutorImage}
              width={50}
              height={50}
              alt="tutor profile"
              className="h-16 w-16 object-cover"
            ></Image>
            <h3 className="md:text-[#000000] text-lg font-[500]">
              {user.name}
            </h3>
            <div className="flex justify-center ">
              {!toggle && (
                <FiToggleRight
                  style={iconStyle}
                  size={25}
                  onClick={handleToggle}
                  className="cursor-pointer"
                />
              )}
              {toggle && (
                <FiToggleLeft
                  style={icon2Style}
                  size={25}
                  onClick={handleToggle}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>
          <ul className="space-y-4 pt-2 tracking-wide cursor-pointer">
            <li
              className={
                selectedIndex === 1
                  ? "md:text-black font-semibold"
                  : "md:text-[#909090]"
              }
              onClick={() => {
                dispatch(setSelectedIndex(1));
                Router.push("/profile/messages");
              }}
            >
              {/* <Link href="/profile/messages"> */}
              <span className="flex items-center gap-2">
                <FiMail />
                Messages
              </span>
              {/* </Link> */}
            </li>
            <li
              className={
                selectedIndex === 2
                  ? "md:text-black font-semibold"
                  : "md:text-[#909090]"
              }
              onClick={() => {
                dispatch(setSelectedIndex(2));
                Router.push("/profile/classes");
              }}
            >
              <span className="flex items-center gap-2">
                <FiBookOpen />
                My Classes
              </span>
            </li>
            <li
              className={
                selectedIndex === 3
                  ? "md:text-black font-semibold"
                  : "md:text-[#909090]"
              }
              onClick={() => {
                dispatch(setSelectedIndex(3));
                Router.push("/profile/calendar");
              }}
            >
              <span className="flex items-center gap-2">
                <FiCalendar />
                Calendar
              </span>
            </li>
            <li
              className={
                selectedIndex === 4
                  ? "md:text-black font-semibold"
                  : "md:text-[#909090]"
              }
              onClick={() => {
                dispatch(setSelectedIndex(4));
                Router.push("/profile/statistics");
              }}
            >
              <span className="flex items-center gap-2">
                <FiBarChart2 />
                Statistics
              </span>
            </li>
            <li
              className={
                [5, 10, 14, 11, 15, 12, 13].includes(selectedIndex)
                  ? "md:text-black font-semibold"
                  : "md:text-[#909090]"
              }
              onClick={() => {
                dispatch(toggleProfileOptions());
              }}
            >
              <span className="flex items-center gap-2">
                <FiUser />
                My Profile
                {!showProfileOptions && <RiArrowDownSLine />}
                {showProfileOptions && <RiArrowUpSLine />}
              </span>
            </li>
            {showProfileOptions && (
              <>
                <li
                  className={
                    selectedIndex === 5
                      ? "md:text-black font-semibold"
                      : "md:text-[#909090]"
                  }
                  onClick={() => {
                    dispatch(setSelectedIndex(5));
                    Router.push("/profile/about");
                  }}
                >
                  <span className="ml-6">About</span>
                </li>
                <li
                  className={
                    selectedIndex === 10
                      ? "md:text-black font-semibold"
                      : "md:text-[#909090]"
                  }
                  onClick={() => {
                    dispatch(setSelectedIndex(10));
                    Router.push("/profile/photo");
                  }}
                >
                  <span className="ml-6">Photo</span>
                </li>
                <li
                  className={
                    selectedIndex === 14
                      ? "md:text-black font-semibold"
                      : "md:text-[#909090]"
                  }
                  onClick={() => {
                    dispatch(setSelectedIndex(14));
                    Router.push("/profile/description");
                  }}
                >
                  <span className="ml-6">Description</span>
                </li>
                <li
                  className={
                    selectedIndex === 11
                      ? "md:text-black font-semibold"
                      : "md:text-[#909090]"
                  }
                  onClick={() => {
                    dispatch(setSelectedIndex(11));
                    Router.push("/profile/video");
                  }}
                >
                  <span className="ml-6">Video</span>
                </li>
                <li
                  className={
                    selectedIndex === 15
                      ? "md:text-black font-semibold"
                      : "md:text-[#909090]"
                  }
                  onClick={() => {
                    dispatch(setSelectedIndex(15));
                    Router.push("/profile/subject");
                  }}
                >
                  <span className="ml-6">Subject</span>
                </li>
                <li
                  className={
                    selectedIndex === 12
                      ? "md:text-black font-semibold"
                      : "md:text-[#909090]"
                  }
                  onClick={() => {
                    dispatch(setSelectedIndex(12));
                    Router.push("/profile/pricing");
                  }}
                >
                  <span className="ml-6">Pricing</span>
                </li>
                <li
                  className={
                    selectedIndex === 13
                      ? "md:text-black font-semibold"
                      : "md:text-[#909090]"
                  }
                  onClick={() => {
                    dispatch(setSelectedIndex(13));
                    Router.push("/profile/background");
                  }}
                >
                  <span className="ml-6">Background</span>
                </li>
              </>
            )}
            <li
              className={
                [6, 9].includes(selectedIndex)
                  ? "md:text-black font-semibold"
                  : "md:text-[#909090]"
              }
              onClick={() => {
                dispatch(toggleSettingOptions());
              }}
            >
              <span className="flex items-center gap-4">
                <FiSettings />
                Settings
                {!showSettingOptions && <RiArrowDownSLine />}
                {showSettingOptions && <RiArrowUpSLine />}
              </span>
            </li>
            {showSettingOptions && (
              <>
                <li
                  className={
                    selectedIndex === 6
                      ? "md:text-black font-semibold"
                      : "md:text-[#909090]"
                  }
                  onClick={() => {
                    dispatch(setSelectedIndex(6));
                    Router.push("/profile/change-password");
                  }}
                >
                  <span className="ml-6">Password</span>
                </li>

                <li
                  className={
                    selectedIndex === 9
                      ? "md:text-black font-semibold"
                      : "md:text-[#909090]"
                  }
                  onClick={() => {
                    dispatch(setSelectedIndex(9));
                    Router.push("/profile/notification");
                  }}
                >
                  <span className="ml-6">Notification</span>
                </li>
              </>
            )}
            <li
              className={
                selectedIndex === 7
                  ? "md:text-black font-semibold"
                  : "md:text-[#909090]"
              }
              onClick={() => {
                setOpen(true);
              }}
            >
              <span className="flex items-center gap-2">
                <CgLogOut />
                Logout
              </span>
            </li>
          </ul>
        </div>
      )}
      <DeleteConfirmationModal
        open={open}
        setOpen={setOpen}
        handleLogout={() => {
          setOpen(false);
          dispatch(logOut());
        }}
      />
    </div>
  );
};

export default SideBar;
