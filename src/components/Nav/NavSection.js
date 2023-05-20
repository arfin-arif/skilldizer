import React, { useEffect, useState } from "react";
import NavDropdown from "./NavDropdown";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import PayoutCard from "../Tutor/TutorDashboard/Payout/PayoutCard";
import BuyHoursModal from "../Dashboard/Hours/BuyHoursModal";

// * redux
import { useDispatch, useSelector } from "react-redux";
import AlertComponent from "../Utils/AlertComponent";
import { openAlert } from "../../store/reducer/alertReducer";
import { clearSuccess } from "../../store/reducer/userReducer";

// * Icons

import {
  addMessageAction,
  arrivalMessageAction,
} from "../../store/actions/messageActions";
import classes from "./NavSection.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";

const { io } = require("socket.io-client");
const socket = io(`${process.env.REACT_APP_BACKEND_API}`);
import { AiOutlineQuestionCircle } from "react-icons/ai";

// * Images
import logo from "../../../public/images/logo-tran.png";
import { errorNotification } from "../notification";
import { setSelectedIndex } from "../../store/reducer/settingsReducer";

const NavSection = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  const [mobileNav, setMobileNav] = useState(false);
  const [tutor, setTutor] = useState(null);

  const { user, message } = useSelector((state) => state.user);
  const { message: stateMessages, arrivalMessage } = useSelector(
    (state) => state.message
  );
  console.log('user from nav', user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      socket.emit("addUser", user._id);
    }
  }, [user]);

  useEffect(() => {
    socket.on("getMessage", (data) => {
      if (data.message !== null) {
        dispatch(arrivalMessageAction(data.message));
      }
    });
  });

  useEffect(() => {
    if (arrivalMessage !== null && arrivalMessage !== undefined && user) {
      if (arrivalMessage.receiverId._id === user._id) {
        dispatch(
          addMessageAction({
            message: 1,
            conversationId: arrivalMessage.conversationId,
          })
        );
      }
    }
  }, [arrivalMessage]);

  useEffect(() => {
    if (message) {
      dispatch(openAlert({ severity: "success", message: message }));
      dispatch(clearSuccess());
    }
  }, [dispatch, message]);

  return (
    <nav className="sticky bg-white top-0 z-50 h-20 ">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row h-full max-w-full"
      >
        <div className="w-[280px] flex items-center justify-center">
          <Link href="/">
            <Image
              className="max-w-[140px] cursor-pointer"
              src={logo}
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex flex-row items-center justify-between w-[100%] px-10">
          {/* Setting mobile Nav */}
          <div
            className={
              mobileNav ? "flex flex-col bg-white text-left" : "hidden lg:flex"
            }
          >
            <ul
              className={
                mobileNav
                  ? "min-w-[200px] list-none ul flex flex-col pl-5 text-[#2f2e2c] font-[500] top-0 right-0 bg-white gap-5 h-screen transition-all duration-150 pr-5 pt-20 overflow-x-hidden fixed "
                  : "list-none ul flex space-x-5 text-[#2f2e2c] items-center justify-between font-[500]"
              }
            >
              {/* When tutor will login */}
              {/* user?.isProfileCompleted && user?.role === "TUTOR" &&  */}
              {user?.isEmailVerified && user?.role === "TUTOR" && (
                <>
                  <li className="cursor-pointer hover:text-[#FF5A00] transition-all duration-150">
                    <Link
                      href="/profile/classes"
                      onClick={() => dispatch(setSelectedIndex(2))}
                      className={({ isActive }) => isActive && "text-[#FF5A00]"}
                    >
                      Dashboard
                    </Link>
                  </li>

                  <li className="cursor-pointer hover:text-[#FF5A00] transition-all duration-150">
                    <Link
                      href="/tutor-register"
                      className={({ isActive }) => isActive && "text-[#FF5A00]"}
                    >
                      Find Students
                    </Link>
                  </li>
                </>
              )}

              {/* When No Users Log In */}
              {!user && (
                <>
                  <li className="cursor-pointer hover:text-[#FF5A00] transition-all duration-150 ">
                    <Link
                      href="/tutors/subject=English"
                      className={({ isActive }) => isActive && "text-[#FF5A00]"}
                    >
                      Find a Tutor
                    </Link>
                  </li>
                  <li
                    id="demo1"
                    className="cursor-pointer inline-flex items-center dropdown group hover:text-[#FF5A00] ease-in-out transition-all duration-150"
                  >
                    <span className="ml-0">Find a Subject</span>
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <NavDropdown />
                  </li>
                  <li className="cursor-pointer hover:text-[#FF5A00] transition-all duration-150">
                    <Link
                      href="/tutor-register"
                      className={({ isActive }) => isActive && "text-[#FF5A00]"}
                    >
                      Become a Tutor
                    </Link>
                  </li>
                </>
              )}

              {/* When student will login */}
              {user?.role !== "TUTOR" && user && (
                <>
                  <li className="cursor-pointer hover:text-[#FF5A00] transition-all duration-150">
                    <Link
                      href="/dashboard"
                      className={({ isActive }) => isActive && "text-[#FF5A00]"}
                    >
                      Student Dashboard
                    </Link>
                  </li>
                  <li
                    id="demo1"
                    className="cursor-pointer inline-flex items-center dropdown group hover:text-[#FF5A00] ease-in-out transition-all duration-150"
                  >
                    <span className="">Find a Subject</span>
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <NavDropdown />
                  </li>
                  <li className="cursor-pointer hover:text-[#FF5A00] transition-all duration-150 ">
                    <Link
                      href="/tutors/subject=English"
                      className={({ isActive }) => isActive && "text-[#FF5A00]"}
                    >
                      Find a Tutor
                    </Link>
                  </li>
                  <div className="space-x-4">
                    <div
                      className={
                        "cursor-pointer py-2 font-[400]] transition-all duration-150 hover:border-[#ffd9c7] hidden md:inline-block"
                      }
                    >
                      <p>Balance: 2 Hours</p>
                    </div>
                  </div>

                  <button className={"button hidden md:inline-block"}>
                    <div>
                      <BuyHoursModal />
                    </div>
                  </button>
                </>
              )}

              {/*{user?.role !== "TUTOR" && (
                <li className="cursor-pointer hover:text-[#FF5A00] transition-all duration-150 ">
                  <Link
                    href="/tutors/subject=English"
                    className={({ isActive }) => isActive && "text-[#FF5A00]"}
                  >
                    Find a Tutor
                  </Link>
                </li>
              )}

              {(!user || user?.role === "USER") && (
                <li className="cursor-pointer hover:text-[#FF5A00] transition-all duration-150">
                  <Link
                    href="/tutor-register"
                    className={({ isActive }) => isActive && "text-[#FF5A00]"}
                  >
                    Become a Tutor
                  </Link>
                </li>
              )}
              
              {user?.role === "TUTOR" && mobileNav && (
                <li className="cursor-pointer hover:text-[#FF5A00] transition-all duration-150">
                <Link
                  href="/tutor-register"
                  className={({ isActive }) => isActive && "text-[#FF5A00]"}
                >
                  Find Subjects
                </Link>
              </li>
              )}



              {user?.role !== "TUTOR" && !mobileNav && (
                <li className="cursor-pointer hover:text-[#FF5A00] transition-all duration-150">
                  <Link
                    href="/dashboard"
                    className={({ isActive }) => isActive && "text-[#FF5A00]"}
                  >
                    Student Dashboard
                  </Link>
                </li>
              )}


              {user?.role === "USER" && (
                <div>
                  <div className="space-x-4">
                    <div
                      className={
                        mobileNav
                          ? "cursor-pointer border-2 rounded-lg px-8 py-2 font-bold shadow-sm border-[#FF5A00] transition-all duration-150 hover:border-[#ffd9c7] md:inline-block fixed bottom-20 right-5 "
                          : "cursor-pointer px-4 py-2 font-bold transition-all duration-150 hover:border-[#ffd9c7] hidden md:inline-block"
                      }
                    >
                      <p>Balance: 2 Hours</p>
                    </div>
                    <button
                      className={
                        mobileNav
                          ? "button fixed bottom-5 right-5"
                          : "button hidden md:inline-block"
                      }
                    >
                      <div>
                        <BuyHoursModal />
                      </div>
                      <Link href="/signup">Buy Hours</Link> 
                    </button>
                  </div>
                </div>
              )} */}
              {/* {user && (
							<div className="lg:hidden text-left space-y-3">
								<li className="cursor-pointer hover:text-[#FF5A00] transition-all duration-150">
									<Link href="/profile/dashboard">Dashboard</Link>
								</li>
								<li className="cursor-pointer hover:text-[#FF5A00] transition-all duration-150">
									<Link href="save-tutor">Saved tutors</Link>
								</li>
								<li className="cursor-pointer hover:text-[#FF5A00] transition-all duration-150">
									<Link href="/profile/setting">Settings</Link>
								</li>
								<li className="cursor-pointer hover:text-[#FF5A00] transition-all duration-150">
									<Link href="/profile/setting">Support</Link>
								</li>
								<li
									className="cursor-pointer hover:text-[#FF5A00] transition-all duration-150 pt-3 border-t"
									onClick={() => dispatch(logOut())}
								>
									Logout
								</li>
							</div>
						)} */}
            </ul>
          </div>

          {user ? (
            <div
              className={
                mobileNav
                  ? "min-w-[200px] pl-5 flex flex-col justify-start items-start fixed bottom-20 right-0 font-[500] bg-white gap-5 transition-all duration-150"
                  : "lg:flex lg:items-center md:justify-center right-20 lg:right-0 lg:relative fixed lg:space-x-5 hidden"
              }
            >
              {user?.role === "TUTOR" && user?.isProfileCompleted && (
                <>
                  <span className="flex gap-2 items-center cursor-pointer">
                    <IoWalletOutline size={22} onClick={handleClickOpen} />
                    {tutor?.totalBalance || 0}USD
                    <PayoutCard open={open} onClose={handleClose} />
                  </span>

                  <Link
                    href="/profile/messages"
                    className={({ isActive }) => isActive && "text-[#FF5A00]"}
                  >
                    <p className="text-lg hover:text-[#FF5A00] flex transition duration-300 rounded-full cursor-pointer gap-2">
                      <AiOutlineMail size={22} />
                      <p className=" text-[#FF5A00]">
                        {stateMessages.length > 0 && stateMessages.length}
                      </p>
                    </p>
                  </Link>
                </>
              )}

              {/* <div className="dropdown relative">
              <div className="cursor-pointer flex items-center space-x-2">
                <Image
                  className="w-8 rounded-full h-8 object-cover"
                  src={user?.avatar?.url ? user?.avatar?.url : iconImage}
                  width={50}
                  height={50}
                  alt="profile_image"
                />
                <p className=" text-[#2f2e2c] font-[500] text-sm ease-in-out transition-all duration-150">
                  {user?.name && nameSplit(user?.name)}
                </p>
              </div>
            </div> */}
              <Link
                href="/faqs"
                className={({ isActive }) => isActive && "text-[#FF5A00]"}
              >
                <p className="text-lg hover:text-[#FF5A00] flex items-center transition duration-300 rounded-full cursor-pointer gap-2">
                  <AiOutlineQuestionCircle size={22} />
                  {mobileNav && <p>FAQS</p>}
                </p>
              </Link>
            </div>
          ) : (
            <div className="space-x-4">
              <Link href="/login">
                <button
                  className={
                    mobileNav
                      ? "cursor-pointer border-2 rounded-lg px-8 py-2 font-bold shadow-sm border-[#FF5A00] transition-all duration-150 hover:border-[#ffd9c7] md:inline-block fixed bottom-20 right-5 "
                      : "cursor-pointer border-2 rounded-lg px-4 py-2 font-bold shadow-sm border-[#FDECE4] transition-all duration-150 hover:border-[#ffd9c7] hidden md:inline-block"
                  }
                >
                  Log in
                </button>
              </Link>
              <button
                className={
                  mobileNav
                    ? "button fixed bottom-5 right-5"
                    : "button hidden md:inline-block"
                }
              >
                <Link href="/signup">Get Started</Link>
              </button>
            </div>
          )}
        </div>
        <button
          id="menu-btn"
          className={
            mobileNav
              ? [classes.open]
              : [classes.hamburger, "block lg:hidden focus:outline-none"]
          }
          type="button"
          onClick={() => setMobileNav(!mobileNav)}
        >
          <span className={classes["hamburger-top"]}></span>
          <span className={classes["hamburger-middle"]}></span>
          <span className={classes["hamburger-bottom"]}></span>
        </button>
      </motion.div>
      <AlertComponent />
    </nav>
  );
};

export default NavSection;
