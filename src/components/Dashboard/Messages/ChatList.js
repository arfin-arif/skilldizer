import React from "react";
import Image from "next/image";
import image from "../../../../public/assets/download.jpg";

const ChatList = () => {
  return (
    <div class="flex flex-col w-full pl-4 pr-4 py-4 -mr-4">
      <div class="mt-5">
        <ul class="flex flex-row items-center justify-between">
          <li>
            <a
              href="#"
              class="text-xs flex items-center pb-3 font-semibold relative text-orange-500 border-b-2 border-orange-500"
              aria-current="page"
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#"
              class="text-xs flex items-center pb-3 font-semibold relative text-orange-500 border-b-2 border-orange-500"
              aria-current="page"
            >
              Unread
            </a>
          </li>

          <li>
            <a
              href="#"
              class="text-xs flex items-center pb-3 font-semibold relative text-orange-500 border-b-2 border-orange-500"
              aria-current="page"
            >
              Archived
            </a>
          </li>
        </ul>
      </div>

      <div class="mt-2">
        <div class="flex flex-col -mx-4">
          <div class="relative flex flex-row items-center p-2 rounded-lg hover:bg-orange-500 cursor-pointer hover:text-white">
            <div class="absolute text-xs text-gray-500 right-0 top-0 mr-4 mt-3">
              5 min
            </div>
            <div class="flex items-center justify-center h-10 w-10 rounded-full flex-shrink-0">
              <div class="relative">
                <Image class="w-10 h-10 rounded-full" src={image} alt="" />
                <span class="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
              </div>
            </div>
            <div class="flex flex-col flex-grow ml-3">
              <div class="text-sm font-medium">Cuberto</div>
              <div class="text-xs truncate w-32">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Debitis, doloribus?
              </div>
            </div>
          </div>

          <div class="relative flex flex-row items-center p-2 rounded-lg hover:bg-orange-500 cursor-pointer hover:text-white">
            <div class="absolute text-xs text-gray-500 right-0 top-0 mr-4 mt-3">
              5 min
            </div>
            <div class="flex items-center justify-center h-10 w-10 rounded-full flex-shrink-0">
              <div class="relative">
                <Image class="w-10 h-10 rounded-full" src={image} alt="" />
                <span class="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
              </div>
            </div>
            <div class="flex flex-col flex-grow ml-3">
              <div class="text-sm font-medium">Cuberto</div>
              <div class="text-xs truncate w-32">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Debitis, doloribus?
              </div>
            </div>
          </div>

          <div class="relative flex flex-row items-center p-2 rounded-lg hover:bg-orange-500 cursor-pointer hover:text-white">
            <div class="absolute text-xs text-gray-500 right-0 top-0 mr-4 mt-3">
              5 min
            </div>
            <div class="flex items-center justify-center h-10 w-10 rounded-full flex-shrink-0">
              <div class="relative">
                <Image class="w-10 h-10 rounded-full" src={image} alt="" />
                <span class="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
              </div>
            </div>

            <div class="flex flex-col flex-grow ml-3">
              <div class="text-sm font-medium">Cuberto</div>
              <div class="text-xs truncate w-32">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Debitis, doloribus?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
