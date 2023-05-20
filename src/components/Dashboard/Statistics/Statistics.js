import React from "react";
import Image from "next/image";
import image from "../../../../public/assets/download.jpg";
import LineChart from './LineChart'
import LeftNav from "../LeftNav";
import CoursesDropdown from './CoursesDrpdown'

// Images 
import image1 from "../../../../public/images/polygon.png";
import image2 from "../../../../public/images/start-your-journey.png";
import image3 from "../../../../public/images/pick-up-tutor.png";
import image4 from "../../../../public/images/book-your-classes.png";

const Statistics = () => {
  return (
    <div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 mx-4">
        {/* Left navbar starts  */}
        <div class="grid gap-4">
          <LeftNav />
        </div>
        {/* Left navbar ends  */}
        {/* center navbar starts  */}
        <div class="grid col-span-2 gap-4">
          <div>
            <div className="h-auto max-w-full rounded-lg bg-white">
              <div className="p-4">
                <div className="flex justify-between px-4">
                  <h1 className="text-xl font-semibold capitalize">
                    Point Statistics
                  </h1>
                  <CoursesDropdown />
                </div>
                <div className="p-4">
                  <div>
                    <LineChart />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-auto max-w-full rounded-lg bg-white mt-4">
              <div className="flex justify-between p-4">
                <h1 className="text-xl font-semibold capitalize">Rankings</h1>
                <button
                  type="button"
                  class="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  View All
                </button>
              </div>
              <div className="p-4">
                {/* Table starts  */}
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="px-6 py-3">
                          Rank
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Student Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Score
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th class="px-6 py-4">01</th>
                        <td
                          scope="row"
                          class="flex items-center py-4 text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <Image
                            class="w-10 h-10 rounded-full"
                            src={image}
                            alt="Jese image"
                          />
                          <div class="pl-3">
                            <div class="text-base font-semibold">Neil Sims</div>
                          </div>
                        </td>

                        <td class="px-6 py-4">
                          <div class="flex items-center">
                            <div class="h-4 w-4 rounded-full bg-orange-500 mr-2"></div>{" "}
                            1989
                          </div>
                        </td>
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th class="px-6 py-4">02</th>
                        <td
                          scope="row"
                          class="flex items-center py-4 text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <Image
                            class="w-10 h-10 rounded-full"
                            src={image}
                            alt="Jese image"
                          />
                          <div class="pl-3">
                            <div class="text-base font-semibold">Neil Sims</div>
                          </div>
                        </td>

                        <td class="px-6 py-4">
                          <div class="flex items-center">
                            <div class="h-4 w-4 rounded-full bg-orange-500 mr-2"></div>{" "}
                            1700
                          </div>
                        </td>
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th class="px-6 py-4">03</th>
                        <td
                          scope="row"
                          class="flex items-center py-4 text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <Image
                            class="w-10 h-10 rounded-full"
                            src={image}
                            alt="Jese image"
                          />
                          <div class="pl-3">
                            <div class="text-base font-semibold">Neil Sims</div>
                          </div>
                        </td>

                        <td class="px-6 py-4">
                          <div class="flex items-center">
                            <div class="h-4 w-4 rounded-full bg-orange-500 mr-2"></div>{" "}
                            1650
                          </div>
                        </td>
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th class="px-6 py-4">04</th>
                        <td
                          scope="row"
                          class="flex items-center py-4 text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <Image
                            class="w-10 h-10 rounded-full"
                            src={image}
                            alt="Jese image"
                          />
                          <div class="pl-3">
                            <div class="text-base font-semibold">Neil Sims</div>
                          </div>
                        </td>

                        <td class="px-6 py-4">
                          <div class="flex items-center">
                            <div class="h-4 w-4 rounded-full bg-orange-500 mr-2"></div>{" "}
                            1600
                          </div>
                        </td>
                      </tr>
                      <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th class="px-6 py-4">05</th>
                        <td
                          scope="row"
                          class="flex items-center py-4 text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <Image
                            class="w-10 h-10 rounded-full"
                            src={image}
                            alt="Jese image"
                          />
                          <div class="pl-3">
                            <div class="text-base font-semibold">Neil Sims</div>
                          </div>
                        </td>

                        <td class="px-6 py-4">
                          <div class="flex items-center">
                            <div class="h-4 w-4 rounded-full bg-orange-500 mr-2"></div>{" "}
                            1350
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* Table ends  */}
              </div>
            </div>
          </div>
        </div>
        {/* center navbar ends  */}
        {/* right navbar starts  */}
        <div class="grid gap-4">
          <div className="h-auto max-w-full rounded-lg ">
            {/* Card starts  */}

            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Image class="rounded-t-lg p-8 h-60" src={image2} alt="" />

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
                  <div>
                    <svg
                      className="h-4 w-4 mr-2"
                      viewBox="0 -3.5 170 170"
                      fill="none"
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
                          d="M142.196 30.4125C142.586 30.0637 142.897 29.6356 143.109 29.1567C143.32 28.6778 143.427 28.1592 143.422 27.6357C143.417 27.1122 143.3 26.5959 143.079 26.1213C142.858 25.6467 142.538 25.2248 142.141 24.8838C141.722 24.5249 141.307 24.1678 140.895 23.8127C137.751 21.1093 134.5 18.3102 131.1 15.9225C105.123 -2.36044 78.1316 -2.4633 50.8803 7.23287C26.2068 16.0055 10.3619 33.5563 3.77909 59.3882C-3.56415 88.249 2.86618 113.71 22.9048 135.073C23.4261 135.625 23.9582 136.177 24.4895 136.704C35.2539 147.469 48.6614 154.115 59.2847 158.739C63.8445 160.731 87.2404 163.149 93.5707 162.206C131.19 156.588 155.946 135.37 164.569 99.8725C166.215 92.9194 167.035 85.7962 167.011 78.6508C166.974 71.1466 165.712 63.6988 163.275 56.6012C163.097 56.0703 162.805 55.5851 162.418 55.1805C162.031 54.7759 161.56 54.4618 161.037 54.2606C160.515 54.0595 159.954 53.9764 159.396 54.0171C158.838 54.0579 158.295 54.2216 157.808 54.4965L157.706 54.5547C156.931 54.9984 156.336 55.7005 156.027 56.5381C155.717 57.3757 155.712 58.2954 156.012 59.1364C158.212 65.2371 159.334 71.674 159.327 78.1592C159.251 85.9394 158.198 93.6792 156.192 101.197C150.248 122.8 136.038 138.545 112.75 149.315C89.0741 160.65 55.1215 149.19 46.0879 143.226C36.1031 136.4 27.3663 127.908 20.2596 118.121C9.11418 102.34 6.61369 79.6587 12.6028 58.9229C15.4055 49.3489 20.3036 40.5185 26.9421 33.0722C33.5806 25.6259 41.793 19.7503 50.9838 15.8714C74.8941 5.93474 98.8852 4.18192 122.285 19.0635C125.422 21.061 133.422 27.3424 137.465 30.5501C138.143 31.0882 138.99 31.3691 139.855 31.3432C140.721 31.3172 141.549 30.986 142.194 30.4082L142.196 30.4125Z"
                          fill="#FA5F0A"
                        ></path>{" "}
                        <path
                          d="M74.6287 104.313C76.2312 102.79 77.1115 102.019 77.9173 101.177C103.753 74.1855 132.047 49.8851 160.508 25.7727C161.584 24.8619 162.685 23.7 163.958 23.3737C165.493 22.9815 167.996 23.4326 168.682 24.2661C169.133 24.8821 169.418 25.6035 169.509 26.3612C169.601 27.1189 169.496 27.8875 169.206 28.5932C168.537 30.3474 166.907 31.8498 165.429 33.1629C156.607 41.0019 147.538 48.5708 138.872 56.5716C120.756 73.3024 102.756 90.1576 84.8704 107.137C77.0334 114.561 74.0173 114.862 66.8059 106.929C62.0589 101.705 47.7328 84.0973 43.3455 78.5495C42.7256 77.6872 42.1735 76.7781 41.6941 75.8305C40.7045 74.0756 40.0576 72.1419 42.0246 70.7814C44.2158 69.2662 45.7707 70.8473 47.0696 72.4937C48.384 74.1607 49.5048 75.9916 50.9121 77.5713C55.2811 82.4737 69.908 99.1421 74.6287 104.313Z"
                          fill="#FA5F0A"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                  Complete 1 French Class
                </div>
                <div class="flex items-center font-normal text-gray-700">
                  <div>
                    <svg
                      className="h-4 w-4 mr-2"
                      viewBox="0 -3.5 170 170"
                      fill="none"
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
                          d="M142.196 30.4125C142.586 30.0637 142.897 29.6356 143.109 29.1567C143.32 28.6778 143.427 28.1592 143.422 27.6357C143.417 27.1122 143.3 26.5959 143.079 26.1213C142.858 25.6467 142.538 25.2248 142.141 24.8838C141.722 24.5249 141.307 24.1678 140.895 23.8127C137.751 21.1093 134.5 18.3102 131.1 15.9225C105.123 -2.36044 78.1316 -2.4633 50.8803 7.23287C26.2068 16.0055 10.3619 33.5563 3.77909 59.3882C-3.56415 88.249 2.86618 113.71 22.9048 135.073C23.4261 135.625 23.9582 136.177 24.4895 136.704C35.2539 147.469 48.6614 154.115 59.2847 158.739C63.8445 160.731 87.2404 163.149 93.5707 162.206C131.19 156.588 155.946 135.37 164.569 99.8725C166.215 92.9194 167.035 85.7962 167.011 78.6508C166.974 71.1466 165.712 63.6988 163.275 56.6012C163.097 56.0703 162.805 55.5851 162.418 55.1805C162.031 54.7759 161.56 54.4618 161.037 54.2606C160.515 54.0595 159.954 53.9764 159.396 54.0171C158.838 54.0579 158.295 54.2216 157.808 54.4965L157.706 54.5547C156.931 54.9984 156.336 55.7005 156.027 56.5381C155.717 57.3757 155.712 58.2954 156.012 59.1364C158.212 65.2371 159.334 71.674 159.327 78.1592C159.251 85.9394 158.198 93.6792 156.192 101.197C150.248 122.8 136.038 138.545 112.75 149.315C89.0741 160.65 55.1215 149.19 46.0879 143.226C36.1031 136.4 27.3663 127.908 20.2596 118.121C9.11418 102.34 6.61369 79.6587 12.6028 58.9229C15.4055 49.3489 20.3036 40.5185 26.9421 33.0722C33.5806 25.6259 41.793 19.7503 50.9838 15.8714C74.8941 5.93474 98.8852 4.18192 122.285 19.0635C125.422 21.061 133.422 27.3424 137.465 30.5501C138.143 31.0882 138.99 31.3691 139.855 31.3432C140.721 31.3172 141.549 30.986 142.194 30.4082L142.196 30.4125Z"
                          fill="#808080"
                        ></path>{" "}
                        <path
                          d="M74.6287 104.313C76.2312 102.79 77.1115 102.019 77.9173 101.177C103.753 74.1855 132.047 49.8851 160.508 25.7727C161.584 24.8619 162.685 23.7 163.958 23.3737C165.493 22.9815 167.996 23.4326 168.682 24.2661C169.133 24.8821 169.418 25.6035 169.509 26.3612C169.601 27.1189 169.496 27.8875 169.206 28.5932C168.537 30.3474 166.907 31.8498 165.429 33.1629C156.607 41.0019 147.538 48.5708 138.872 56.5716C120.756 73.3024 102.756 90.1576 84.8704 107.137C77.0334 114.561 74.0173 114.862 66.8059 106.929C62.0589 101.705 47.7328 84.0973 43.3455 78.5495C42.7256 77.6872 42.1735 76.7781 41.6941 75.8305C40.7045 74.0756 40.0576 72.1419 42.0246 70.7814C44.2158 69.2662 45.7707 70.8473 47.0696 72.4937C48.384 74.1607 49.5048 75.9916 50.9121 77.5713C55.2811 82.4737 69.908 99.1421 74.6287 104.313Z"
                          fill="#808080"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                  Complete 1 French Class
                </div>
              </div>
            </div>
            {/* Card ends  */}
          </div>
        </div>
        {/* right navbar ends */}
      </div>
    </div>
  );
};

export default Statistics;
