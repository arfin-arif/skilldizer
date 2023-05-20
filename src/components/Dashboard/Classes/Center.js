import React from "react";
import Image from "next/image";
import image from "../../../../public/assets/download.jpg";
import Tabs from './Tabs'
import BuyHoursModal from "../Hours/BuyHoursModal";

const Center = () => {
  return (
    <div>
      <div>
        <div className="h-auto max-w-full rounded-lg bg-white">
          <div className="mt-2">
            <div className="flex justify-between p-4">
              <h1 className="text-xl font-semibold capitalize">My Classes</h1>
              <div className="flex">
                <a
                  href="#"
                  type="button"
                  class="text-orange-500 bg-orange-200 hover:bg-orange-400 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Transfer Credits
                </a>
                <a
                  href="#"
                  type="button"
                  class="text-white bg-orange-400 hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Alternative
                </a>
                <a
                  href="#"
                  type="button"
                  class="text-white bg-orange-500 hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Schedule New Class
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="h-auto max-w-full rounded-lg bg-white mt-4">
          <div className="flex justify-between p-4">
            <h1 className="text-xl font-semibold capitalize">
              Start your journey now
            </h1>
          </div>
          <div className="p-4">
            {/* Stepper starts  */}
            <div className="m-2 px-4">
              <ol class="relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">
                <li class="mb-10 ml-6">
                  <span class="absolute flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                    <svg
                      aria-hidden="true"
                      class="w-10 h-10 text-white bg-green-400 text-white dark:text-green-400 flex items-center justify-center w-12 h-12 mr-2 rounded-full shrink-0"
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
                  <h3 class="font-medium leading-tight ml-2">
                    Share your goal with tutor(2min)
                  </h3>
                </li>

                <li class="mb-10 ml-6">
                  <span class="absolute flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                    <span class="flex items-center justify-center w-12 h-12 mr-2 text-xs text-white bg-orange-500 border border-orange-500 rounded-full shrink-0 dark:border-blue-500">
                      2
                    </span>
                  </span>
                  <h3 class="font-medium leading-tight ml-2">
                    Take your trial class!
                  </h3>
                  <p class="text-sm ml-2">
                    Meet your tutor and decide whether it`s good match
                  </p>
                </li>

                <li class="mb-10 ml-6 flex justify-between">
                  <div>
                    <span class="absolute flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                      <span class="flex items-center justify-center w-12 h-12 mr-2 text-xs text-orange-600 bg-orange-100 border border-orange-100 rounded-full shrink-0 dark:border-blue-500">
                        3
                      </span>
                    </span>
                    <h3 class="font-medium leading-tight ml-2">
                      Continue learning with Sarfran or try another tutor
                    </h3>
                    <p class="text-sm ml-2">
                      If you like your tutor, buy more hours to plan more
                      classes
                    </p>
                  </div>

                  <a
                    href="#"
                    type="button"
                    class="bg-orange-500 hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    <BuyHoursModal />
                  </a>
                </li>
              </ol>
            </div>
            {/* Stepper ends  */}
          </div>
        </div>
      </div>
      <div className="px-2">
        <Tabs />
      </div>
    </div>
  );
};

export default Center;
