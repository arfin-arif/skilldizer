import React from "react";
import Image from "next/image";
import image from "../../../../public/assets/download.jpg";
import LineChart from "../Statistics/LineChart";

const Center = () => {
  return (
    <div>
      <div>
        <div className="m-4">
          <h1 className="text-xl font-semibold capitalize">Milestones</h1>
        </div>
        <div className="h-auto max-w-full rounded-lg bg-white">
          <div className="mt-2">
            <div className="flex p-4">
              <span class="flex items-center justify-center w-7 h-7 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                <svg
                  aria-hidden="true"
                  class="w-7 h-7 text-white bg-orange-400 text-white dark:text-green-400 flex items-center justify-center w-12 h-12 mr-2 rounded-full shrink-0"
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
              </span>
              <div className="ml-2">
                <h1 className="text-xl font-semibold capitalize">My Classes</h1>
                <p class="text-sm ">
                  Meet your tutor and decide whether it`s good match
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-auto max-w-full rounded-lg bg-white">
          <div className="mt-2">
            <div className="flex p-4">
              <div>
                <span class="flex items-center justify-center w-7 h-7 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                  <svg
                    class="text-orange-400 bg-orange-100 text-white border border-white flex items-center justify-center w-7 h-7 rounded-full shrink-0"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    version="1.1"
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
                      <path d="M31.714 11.864l-11.505-11.563c-0.248-0.249-0.605-0.35-0.948-0.266-0.341 0.083-0.613 0.339-0.717 0.674-0.692 2.228-0.773 4.245-0.244 6.084-0.049 0.034-0.095 0.070-0.138 0.113l-5.347 5.346c-1.725-0.8-3.579-1.233-5.428-1.233-1.175 0-2.327 0.174-3.424 0.515-0.334 0.104-0.59 0.375-0.674 0.714s0.014 0.698 0.261 0.947l6.843 6.887-9.568 9.72-0.832 2.192 2.011-0.777 9.793-9.72 6.932 6.977c0.189 0.192 0.447 0.295 0.709 0.295 0.079 0 0.159-0.010 0.238-0.029 0.341-0.084 0.613-0.34 0.717-0.675 0.905-2.913 0.64-6.042-0.636-8.848l5.459-5.46c0.020-0.020 0.033-0.041 0.051-0.063 0.824 0.236 1.678 0.361 2.564 0.361 1.101 0 2.268-0.158 3.468-0.531 0.334-0.104 0.59-0.375 0.674-0.714s-0.015-0.697-0.262-0.945zM18.849 25.755l-12.587-12.669c3.23-0.377 6.714 0.925 9.236 3.447 2.51 2.509 3.735 5.978 3.351 9.221zM18.757 17.392c-0.526-0.804-1.14-1.568-1.845-2.274-0.702-0.702-1.469-1.321-2.28-1.854l4.504-4.503c0.459 0.799 1.052 1.563 1.782 2.291 0.745 0.745 1.534 1.348 2.363 1.814zM22.332 9.639c-1.923-1.923-2.664-4.067-2.271-6.653l8.966 9.012c-2.583 0.37-4.738-0.403-6.695-2.36z"></path>{" "}
                    </g>
                  </svg>
                </span>
              </div>
              <div className="ml-2">
                <h1 className="text-xl font-semibold capitalize">
                  Follow us on Social Media
                </h1>
                <p class="text-sm ">@Skilldizzer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-auto max-w-full rounded-lg bg-white">
          <div className="mt-2">
            <div className="flex p-4">
              <div>
                <span class="flex items-center justify-center w-7 h-7 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                  <svg
                    class="text-white bg-orange-100 text-white border border-white flex items-center justify-center w-7 h-7 mr-2 rounded-full shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
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
                      <g id="Navigation / Flag">
                        {" "}
                        <path
                          id="Vector"
                          d="M4 21V15.6871M4 15.6871C9.81818 11.1377 14.1818 20.2363 20 15.6869V4.31347C14.1818 8.86284 9.81818 -0.236103 4 4.31327V15.6871Z"
                          stroke="#ff4000"
                          stroke-width="1"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </span>
              </div>

              <div className="ml-2">
                <h1 className="text-xl font-semibold capitalize">
                  Milestone 1
                </h1>
                <p class="text-sm ">Complete 8 Classes before</p>
                <button class="bg-orange-500 text-white px-4 rounded-full">
                  March 29
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="h-auto max-w-full rounded-lg bg-white">
          <div className="mt-2">
            <div className="flex p-4">
              <div>
                <span class="flex items-center justify-center w-7 h-7 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                  <svg
                    class="text-white bg-orange-100 text-white border border-white flex items-center justify-center w-7 h-7 mr-2 rounded-full shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
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
                      <g id="Navigation / Flag">
                        {" "}
                        <path
                          id="Vector"
                          d="M4 21V15.6871M4 15.6871C9.81818 11.1377 14.1818 20.2363 20 15.6869V4.31347C14.1818 8.86284 9.81818 -0.236103 4 4.31327V15.6871Z"
                          stroke="#ff4000"
                          stroke-width="1"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </span>
              </div>
              <div className="ml-2">
                <h1 className="text-xl font-semibold capitalize">
                  Milestone 2
                </h1>
                <p class="text-sm ">
                  1 Maximum reschedule class durin the month
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-auto max-w-full rounded-lg bg-white">
          <div className="mt-2">
            <div className="flex p-4">
              <div>
                <span class="flex items-center justify-center w-7 h-7 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                  <svg
                    class="text-white bg-orange-100 text-white border border-white flex items-center justify-center w-7 h-7 mr-2 rounded-full shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
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
                      <g id="Navigation / Flag">
                        {" "}
                        <path
                          id="Vector"
                          d="M4 21V15.6871M4 15.6871C9.81818 11.1377 14.1818 20.2363 20 15.6869V4.31347C14.1818 8.86284 9.81818 -0.236103 4 4.31327V15.6871Z"
                          stroke="#ff4000"
                          stroke-width="1"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </span>
              </div>
              <div className="ml-2">
                <h1 className="text-xl font-semibold capitalize">
                  Milestone 3
                </h1>
                <p class="text-sm ">0 No show up classes during the month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
