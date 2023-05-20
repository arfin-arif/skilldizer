import React from "react";
import Image from "next/image";
import image from "../../../../public/assets/download.jpg";
import LineChart from "../Statistics/LineChart";

// Images 
import image1 from "../../../../public/images/polygon.png";
import image2 from "../../../../public/images/start-your-journey.png";
import image3 from "../../../../public/images/pick-up-tutor.png";
import image4 from "../../../../public/images/book-your-classes.png";

const Right = () => {
  return (
    <div>
      <div className="h-auto max-w-full rounded-lg ">
        {/* Card starts  */}

        <div class="max-w-sm mt-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Image class="rounded-t-lg p-4 h-40" src={image3} alt="" />

          <div class="px-2">
            <h5 class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              You have Earned <br /> 35 Points
            </h5>

            <p class="text-center mb-3 font-normal text-gray-700 dark:text-gray-400">
              Great Keep it Up!!!
            </p>
            <div className="mx-4">
              <button
                type="button"
                class="text-white w-full bg-orange-200 text-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                35 Points
              </button>
            </div>
          </div>
        </div>
        {/* Card ends  */}
        {/* Card starts  */}

        <div class="max-w-sm mt-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="p-5">
            <div class="grid grid-cols-3 gap-2">
              <div className="bg-orange-500 h-auto max-w-full rounded-xl">
                <div className="text-center m-2">
                  <div className="px-2">
                    <svg
                      class="text-orange-500 bg-orange-500 border border-white flex items-center justify-center w-12 h-12 mr-2 rounded-full shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M12 7.49976V19.5M12 7.49976L13.7333 6.6332C14.5663 6.21673 15.4849 5.9999 16.4162 5.99988L18.9999 5.99981C20.1045 5.99978 21 6.89522 21 7.99981V15.9998C21 17.1043 20.1046 17.9998 19 17.9998H16.4166C15.485 17.9998 14.5662 18.2167 13.733 18.6334L12 19.5M12 7.49976L10.2667 6.63326C9.43369 6.21681 8.51514 5.99999 7.58379 5.99999H5C3.89543 5.99999 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H7.58359C8.51506 18 9.43374 18.2169 10.2669 18.6334L12 19.5"
                          stroke="#ffffff"
                          stroke-width="1"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                  <p className="text-xs text-white m-2">No Show Classes</p>
                  <p className="text-white font-semibold">250</p>
                </div>
              </div>

              <div className="bg-black h-auto max-w-full rounded-xl">
                <div className="text-center m-2">
                  <div className="px-2">
                    <svg
                      class="text-white bg-black text-white border border-white flex items-center justify-center w-12 h-12 mr-2 rounded-full shrink-0"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <defs></defs>{" "}
                        <g id="time">
                          {" "}
                          <path
                            class="cls-1"
                            d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z"
                          ></path>{" "}
                          <path
                            class="cls-1"
                            d="M22,17H18a3,3,0,0,1-3-3V8.8a1,1,0,1,1,2,0V14a1,1,0,0,0,1,1h4a1,1,0,0,1,0,2Z"
                          ></path>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </div>
                  <p className="text-xs text-white mt-2">Rescheduled Classes</p>
                  <p className="text-white font-semibold">20</p>
                </div>
              </div>

              <div className="bg-orange-300 h-auto max-w-full rounded-xl">
                <div className="text-center m-2">
                  <div className="px-2">
                    <svg
                      aria-hidden="true"
                      class="text-white bg-orange-300 text-orange-500 border border-orange-500 dark:text-green-400 flex items-center justify-center w-12 h-12 mr-2 rounded-full shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-xs text-black m-2">Completed</p>
                  <p className="text-black font-semibold mt-6">40</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <p>Completed classes</p>
              <h1>94%</h1>
              <button
                type="button"
                class="text-white bg-orange-200 text-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-1 text-center "
              >
                2.5%
              </button>
            </div>
          </div>
        </div>
        {/* Card ends  */}
      </div>
    </div>
  );
};

export default Right;
