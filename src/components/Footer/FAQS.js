import React from "react";
import { BsSearch } from "react-icons/bs";
import { useSelector } from "react-redux";

import FAQCard from "./FAQCard";

const Faqs = () => {
  const icon = { color: "#FFAC80" };
  return (
    <div className="bg-[#fcf4f0]" style={{ minWidth: "100%" }}>
      <div className="bg-white pl-6 my-6 mx-20">
        <div className="flex justify-center items-center pt-16 flex-col gap-4">
          <h1 className="text-[#FF5A00] font-[500] text-[22px]">FAQs</h1>
          <h2
            className="font-[600] text-[36px]"
            style={{ textAlign: "center" }}
          >
            Frequently Asked Questions
          </h2>
          <h3
            className="font-[500] text-[20px]"
            style={{ textAlign: "center" }}
          >
            Have questions? we are here to help.
          </h3>
          <div className="relative mt-8 ">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <BsSearch style={icon} />
            </div>
            <input
              className="border-2 border-[#FFAC80] rounded-md placeholder:text-[#FFAC80] pl-10 py-2 w-[21rem]"
              placeholder="Search"
            />
          </div>
          <div style={{ margin: "3rem 0" }}>
            {/* //* Students */}
            <FAQCard type="student" />

            {/* //* Tutors */}
            <FAQCard type="tutor" />

            {/* //* Parents */}
            <FAQCard type="parent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
