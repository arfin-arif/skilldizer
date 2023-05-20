import React from 'react'
import Image from "next/image";
import image from '../../../public/assets/download.jpg'
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import BarChartIcon from "@mui/icons-material/BarChart";
import StreamIcon from "@mui/icons-material/Stream";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsDropdown from "./SettingsDropdown";

const MessagesRight = () => {
  return (
    <div className="m-4 h-auto bg-white">
      <div className="grid grid-cols-4 gap-0 ">
        <div className="col-span-1 border-r-2 border-gray-300">
          <div class="relative w-full">
            <div class="absolute inset-x-0 top-0 h-16 border-b-2 border-gray-300">
              <div class="flex justify-between m-2 pb-0">
                <div className="mb-0">
                  <div class="flex justify-between m-2 pb-0 space-x-2">
                    <div>
                      <p className="font-sans text-slate-600 hover:text-[#FF5A00] transition-all duration-150 cursor-pointer">
                        All
                      </p>
                    </div>
                    <div>
                      <p className="font-sans text-slate-600 hover:text-[#FF5A00] transition-all duration-150 cursor-pointer">
                        Unread
                      </p>
                    </div>
                  </div>
                </div>
                <div class="flex justify-between m-2 pb-0">
                  <p className="font-sans text-slate-600 hover:text-[#FF5A00] transition-all duration-150 cursor-pointer">
                    Archived
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <ul role="list" class="p-2 divide-y divide-slate-200">
              <li class="flex py-4 first:pt-0 last:pb-0">
                <Image class="h-10 w-10 rounded-full" src={image} alt="image" />
                <div class="ml-3 overflow-hidden">
                  <p class="text-sm font-medium text-slate-900">
                    Joshua Kutuny
                  </p>
                  <p class="text-sm text-slate-500 truncate">
                    I would love to send a message
                  </p>
                </div>
              </li>

              <li class="flex py-4 first:pt-0 last:pb-0">
                <div class="relative">
                  <span class="absolute text-green-500 right-0 bottom-0">
                    <svg width="10" height="10">
                      <circle cx="4" cy="4" r="8" fill="currentColor"></circle>
                    </svg>
                  </span>
                  <Image
                    class="h-10 w-10 rounded-full"
                    src={image}
                    alt="image"
                  />
                </div>

                <div class="ml-3 overflow-hidden">
                  <p class="text-sm font-medium text-slate-900">
                    Joshua Kutuny
                  </p>
                  <p class="text-sm text-slate-500 truncate">
                    I would love to send a message
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-2 border-r-2 border-gray-300">
          <div class="relative w-full bg-slate-800">
            <div class="absolute inset-x-0 top-0 h-16 border-b-2 border-gray-300">
              <div class="flex justify-between m-2 pb-0">
                <div className="mt-3">
                  <h5 className="text-sm font-bold text-xl text-slate-900">
                    Joshua Kutuny
                  </h5>
                </div>
              </div>
            </div>
          </div>
          {/* <hr class="h-px my-8 bg-gray-300 border-0 dark:bg-slate-700"></hr> */}
          {/* Chatbox starts  */}

          {/* Chatbox ends */}
        </div>
        <div className="col-span-1">
          <div class="w-full max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center pt-2">
              <Image
                class="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={image}
                alt="Bonnie image"
              />
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Bonnie Green
              </h5>

              <div class="flex items-center">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-300 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  (34)
                </p>
              </div>
              <span class="text-sm font-bold text-gray-900 dark:text-gray-400">
                $3.00/hr
              </span>

              <div className="mt-2 border-b-2 border-gray-300">
                <ul role="list" class="p-2">
                  <li class="flex first:pt-0 last:pb-0">
                    <div class="relative">
                      <MailOutlineIcon className="h-10 w-10 rounded-full" />
                    </div>

                    <div class="ml-3 overflow-hidden">
                      <p class="text-sm font-medium text-slate-900">Subject</p>
                      <p class="text-sm text-slate-500">Arabic</p>
                    </div>
                  </li>
                  <li class="flex first:pt-0 last:pb-0">
                    <div class="relative">
                      <MailOutlineIcon className="h-10 w-10 rounded-full" />
                    </div>

                    <div class="ml-3 overflow-hidden">
                      <p class="text-sm font-medium text-slate-900">
                        Tutor`s Time
                      </p>
                      <p class="text-sm text-slate-500">
                        America/New_York GMT-5:00{" "}
                      </p>
                    </div>
                  </li>
                  <li class="flex first:pt-0 last:pb-0">
                    <div class="relative">
                      <MailOutlineIcon className="h-10 w-10 rounded-full" />
                    </div>

                    <div class="ml-3 overflow-hidden">
                      <p class="text-sm font-medium text-slate-900">
                        Pre-Paid Hours
                      </p>
                      <p class="text-sm text-slate-500">1 Hour</p>
                    </div>
                  </li>
                  <li class="flex first:pt-0 last:pb-0">
                    <div class="relative">
                      <MailOutlineIcon className="h-10 w-10 rounded-full" />
                    </div>

                    <div class="ml-3 overflow-hidden">
                      <p class="text-sm font-medium text-slate-900">Email</p>
                      <p class="text-sm text-slate-500">
                        tra.reemail@hotmail.com
                      </p>
                    </div>
                  </li>
                  <li class="flex first:pt-0 last:pb-0">
                    <div class="relative">
                      <MailOutlineIcon className="h-10 w-10 rounded-full" />
                    </div>

                    <div class="ml-3 overflow-hidden">
                      <p class="text-sm font-medium text-slate-900">Details</p>
                      <ul className="text-sm text-slate-500">
                        <li>Main reason for class:Career/business</li>
                        <li>Level of knowledge:Proficient</li>
                        <li>Desired level:Proficient</li>
                        <li>Achieve goal before:2023-06-04</li>
                        <li>Hours per week:4</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="flex flex-col space-y-2 my-2 px-6 w-full">
                <button className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">
                  Buy Hours
                </button>
                <button class="bg-transparent hover:bg-orange-500 text-orange-600 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">
                  Enter Classroom
                </button>
                <button class="bg-transparent hover:bg-orange-500 text-orange-600 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">
                  Archive Tutor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagesRight