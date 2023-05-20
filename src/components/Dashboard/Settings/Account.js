import React from "react";
import Image from "next/image";
import image from "../../../../public/assets/download.jpg";
import Link from "next/link";

const Account = () => {
  return (
    <div className="bg-white">
      <div className="width-full border-b-2 border-gray-300">
        <h1 className="py-4 px-2 text-xl font-semibold text-gray-900">
          Account Settings
        </h1>
      </div>
      <div className="m-4 px-2">
        <div>
          <h1 className="text-medium font-semibold text-gray-900">
            Profile Image
          </h1>
          <div className="flex justify-between py-4">
            <Image class="w-40 h-40 rounded-lg" src={image} alt="" />
            <div>
              <label
                class="block mb-2 text-sm font-medium text-orange-500 dark:text-white"
                for="user_avatar"
              >
                Upload a photo
              </label>
              <input
                class="block w-full text-sm text-orange-500 border border-orange-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
            <div>
              <label
                for="first-name"
                class="block text-sm font-semibold leading-6 text-gray-900"
              >
                First name
              </label>
              <div class="mt-2.5 relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  placeholder="First name"
                  class="block w-full pl-10 p-2.5 rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                for="last-name"
                class="block text-sm font-semibold leading-6 text-gray-900"
              >
                Last name
              </label>
              <div class="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  placeholder="Last Name"
                  class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="phone-number"
                class="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone number
              </label>
              <div class="relative mt-2.5">
                <div class="absolute inset-y-0 left-0 flex items-center">
                  <label for="country" class="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-600 sm:text-sm"
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                  <svg
                    class="pointer-events-none absolute top-0 right-3 h-full w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autocomplete="tel"
                  class="block w-full rounded-md border-0 py-2 px-3.5 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="email"
                class="block text-sm font-semibold leading-6 text-gray-900"
              >
                Timezone
              </label>
              <div class="mt-1.5">
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-blue-500"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>France</option>
                  <option>Germany</option>
                </select>
              </div>
            </div>
          </div>
          <div className="py-2">
            <h1 className="text-medium font-semibold text-gray-900 mt-2">
              Social Networks
            </h1>
            <div className="mt-2">
              <div className="flex space-x-2">
                <button class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg
                    class="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Facebook page</span>
                </button>
                <div>
                  <h1 className="font-bold text-sm text-gray-600">
                    Not Connected to Facebook Account
                  </h1>
                  <Link href="#" className="text-orange-500 font-bold">
                    Connect
                  </Link>
                </div>
              </div>
              <div className="flex space-x-2">
                <button class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg
                    fill="currentColor"
                    class="w-8 h-8"
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
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.5265 19 18.4439 16.3923 18.9291 13H13C12.4477 13 12 12.5523 12 12C12 11.4477 12.4477 11 13 11H20C20.5523 11 21 11.4477 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.1424 3 16.1123 3.74979 17.6578 5.00041C18.0871 5.34782 18.1535 5.97749 17.8061 6.40682C17.4587 6.83615 16.829 6.90256 16.3997 6.55515C15.1972 5.58212 13.668 5 12 5Z"
                        fill="#000000"
                      ></path>{" "}
                    </g>
                  </svg>
                </button>
                <div>
                  <h1 className="font-bold text-sm text-gray-600">
                    Not Connected to Google Account
                  </h1>
                  <Link href="#" className="text-orange-500 font-bold">
                    Connect
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Buttons starts  */}
          <div className="flex mb-8 mt-4">
            <button
              type="button"
              class="text-white bg-red-600 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
            >
              Delete Account
            </button>
            <button
              type="button"
              class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-orange-500 rounded-lg border border-gray-200 hover:bg-orange-600 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Save Settings
            </button>
          </div>
          {/* Buttons ends  */}
        </div>
      </div>
    </div>
  );
};

export default Account;
