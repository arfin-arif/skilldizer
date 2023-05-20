import React from 'react'
import Image from "next/image";
import image from "../../../../public/assets/download.jpg";
import ReviewModal from './ReviewModal';

const Tabs = () => {
    const [openTab, setOpenTab] = React.useState(1);
  return (
    <div>
      <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li class="mr-2">
            <a
              href="#"
              className={
                "inline-flex p-4 border-b-2 rounded-t-lg " +
                (openTab === 1
                  ? "text-orange-600 border-orange-600"
                  : "border-transparent")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
            >
              <svg
                class={
                  "w-5 h-5 mr-2 p-4" +
                  (openTab === 1 ? "text-orange-400" : "text-gray-400")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                fill="currentColor"
                viewBox="0 0 32 32"
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
                  <path d="M29.753 0.049l-13.22 3.581c-0.336 0.090-1.066 0.089-1.4-0.005l-12.88-3.569c-1.149-0.317-2.263 0.512-2.263 1.696v24.316c0 1.003 0.76 1.962 1.728 2.232l12.88 3.57c0.345 0.096 0.788 0.149 1.248 0.149 0.315 0 0.781-0.024 1.21-0.142l13.22-3.581c0.971-0.262 1.734-1.22 1.734-2.227v-24.317c0.001-1.183-1.113-2.014-2.258-1.703zM15 29.904l-12.779-3.533c-0.096-0.026-0.232-0.203-0.232-0.303v-24.001l12.608 3.486c0.122 0.034 0.259 0.061 0.402 0.083v24.269zM30.010 26.068c0 0.099-0.162 0.27-0.258 0.297l-12.753 3.454v-24.247c0.018-0.005 0.038-0.007 0.056-0.012l12.954-3.504v24.012h0zM20.062 11.447c0.090 0 0.182-0.011 0.272-0.037l6.998-1.97c0.532-0.15 0.842-0.702 0.692-1.234s-0.705-0.84-1.234-0.692l-6.998 1.97c-0.532 0.15-0.842 0.702-0.692 1.234 0.124 0.441 0.525 0.729 0.962 0.729zM20.063 17.447c0.090 0 0.182-0.012 0.272-0.037l6.998-1.97c0.532-0.15 0.842-0.702 0.692-1.234s-0.705-0.84-1.234-0.693l-6.998 1.97c-0.532 0.15-0.842 0.702-0.692 1.233 0.124 0.442 0.525 0.73 0.962 0.73zM20.063 23.447c0.090 0 0.182-0.012 0.272-0.037l6.998-1.97c0.532-0.151 0.842-0.702 0.692-1.234s-0.705-0.84-1.234-0.692l-6.998 1.97c-0.532 0.151-0.842 0.702-0.692 1.234 0.124 0.441 0.525 0.73 0.962 0.73zM12.332 9.484l-6.998-1.97c-0.529-0.147-1.084 0.161-1.234 0.692s0.16 1.083 0.692 1.234l6.998 1.97c0.090 0.025 0.181 0.037 0.271 0.037 0.437 0 0.838-0.288 0.962-0.729 0.149-0.531-0.16-1.083-0.693-1.234zM12.332 15.484l-6.998-1.97c-0.529-0.148-1.084 0.161-1.234 0.693s0.16 1.083 0.692 1.234l6.998 1.97c0.090 0.026 0.181 0.037 0.271 0.037 0.437 0 0.838-0.288 0.962-0.73 0.149-0.531-0.16-1.083-0.693-1.234zM12.332 21.484l-6.998-1.97c-0.529-0.148-1.084 0.161-1.234 0.692s0.16 1.083 0.692 1.234l6.998 1.97c0.090 0.026 0.181 0.037 0.271 0.037 0.437 0 0.838-0.288 0.962-0.73 0.149-0.532-0.16-1.083-0.693-1.234z"></path>{" "}
                </g>
              </svg>
              Classes
            </a>
          </li>
          <li class="mr-2">
            <a
              href="#"
              className={
                "inline-flex p-4 border-b-2 rounded-t-lg " +
                (openTab === 2
                  ? "text-orange-600 border-orange-600"
                  : "border-transparent")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
            >
              <svg
                class={
                  "w-5 h-5 mr-2 p-4" +
                  (openTab === 2 ? "text-orange-400" : "text-gray-400")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                fill="currentColor"
                viewBox="0 0 256 256"
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
                    d="M32 160L166.394 26.643a4.001 4.001 0 0 1 5.654.026l57.837 58.237a4.034 4.034 0 0 1-.007 5.676L97.348 223.59 32 224v-64zm16.797 5.594V208h40.488l121.92-121.396L180.57 56.56 64.656 175.772a3.937 3.937 0 0 1-5.624.037l-10.235-10.215z"
                    fill-rule="evenodd"
                  ></path>{" "}
                </g>
              </svg>
              Tutor
            </a>
          </li>
        </ul>
      </div>
      <div id="myTabContent">
        <div
          className={openTab === 1 ? "block" : "hidden"}
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div className="h-auto max-w-full rounded-lg bg-white">
            <div className="mt-4">
              <h1 className="text-xl font-semibold capitalize p-4">
                Upcoming Classes
              </h1>
              <div className="p-2">
                <div className="h-auto py-2 bg-orange-100 rounded-lg">
                  <div className="flex justify-between px-4">
                    <div>
                      <div class="flex items-center space-x-4">
                        <Image
                          class="w-10 h-10 rounded-full"
                          src={image}
                          alt="image"
                        />
                        <div class="font-medium dark:text-white">
                          <div>Jese Leos</div>
                          <div class="text-sm text-gray-500 dark:text-gray-400">
                            Joined in August 2014
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <ReviewModal />
                      </div>
                      <button
                        id="dropdownButton"
                        data-dropdown-toggle="dropdown"
                        class="inline-block text-gray-500 dark:text-gray-400 focus:outline-none dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                        type="button"
                      >
                        <span class="sr-only">Open dropdown</span>
                        <svg
                          class="w-6 h-6"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={openTab === 2 ? "block" : "hidden"}
          id="dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <div className="h-auto max-w-full rounded-lg bg-white">
            <div className="mt-4">
              <div className="p-4">
                <div className="h-auto py-2 bg-orange-100 rounded-lg">
                  <div className="flex justify-between px-4">
                    <div>
                      <div class="flex items-center space-x-4">
                        <Image
                          class="w-10 h-10 rounded-full"
                          src={image}
                          alt="image"
                        />
                        <div class="font-medium dark:text-white">
                          <div>Safwan</div>
                          <div class="text-sm text-gray-500 dark:text-gray-400">
                            Arabic
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h1 className="font-semibold dark:text-white">0 Hours</h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        to schedule
                      </p>
                    </div>
                    <div>
                      <h1 className="font-semibold dark:text-white">$3.00</h1>
                      <p className="text-base text-gray-500 dark:text-gray-400">
                        per hour
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <a
                        href="#"
                        type="button"
                        class="text-white bg-orange-500 hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                      >
                        Buy Hours
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs