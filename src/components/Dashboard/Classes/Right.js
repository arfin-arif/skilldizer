import React from 'react'
import Image from "next/image";
import image from "../../../../public/assets/download.jpg";
import LineChart from "../Statistics/LineChart";

const Right = () => {
  return (
    <div>
      <div className="h-auto max-w-full rounded-lg ">
        {/* Card starts  */}

        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Image class="rounded-t-lg p-8 h-60" src={image} alt="" />

          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                A Journey To <br /> Excellence
              </h5>
            </a>
            <p class="text-center mb-3 font-normal text-gray-700 dark:text-gray-400">
              Academic Excellence and <br /> Cultural Diversity
            </p>
          </div>
        </div>
        {/* Card ends  */}
        {/* Card starts  */}

        <div class="max-w-sm mt-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Homework
            </h5>
            <div class="flex items-center font-normal text-gray-700">
              <div class="h-4 w-4 rounded-full bg-orange-500 mr-2"></div>{" "}
              Complete 1 French Class
            </div>
            <div class="flex items-center font-normal text-gray-700">
              <div class="h-4 w-4 rounded-full bg-orange-500 mr-2"></div>{" "}
              Complete 1 French Class
            </div>
          </div>
        </div>
        {/* Card ends  */}
      </div>
    </div>
  );
}

export default Right