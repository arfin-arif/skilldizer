import Link from 'next/link'
import React from 'react'

const PaymentHistory = () => {
  return (
    <div className="bg-white">
      <div className="bg-black rounded-t-lg">
        <div className="flex justify-between text-white mt-0 m-6 py-4">
          <h1 className="text-xl font-semibold">Payment History</h1>
          <div className="text-lg font-medium">
            <Link href="/dashboard/settings/billing_info">Update Billing Info</Link>
          </div>
        </div>
      </div>
      {/* Table Starts  */}

      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Date
              </th>
              <th scope="col" class="px-6 py-3">
                Hours
              </th>
              <th scope="col" class="px-6 py-3">
                Subject
              </th>
              <th scope="col" class="px-6 py-3">
                Download All
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                12 Feb 2023
              </th>
              <td class="px-6 py-4">1 Hour</td>
              <td class="px-6 py-4">Arabic</td>
              <td class="px-6 py-4">
                <Link href="#">
                  <div className="flex text-orange-500">
                    <svg
                      class="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
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
                        <g id="File / Download_Package">
                          {" "}
                          <path
                            id="Vector"
                            d="M4 8V16.8C4 17.9201 4 18.4798 4.21799 18.9076C4.40973 19.2839 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2839 19.7822 18.9076C20 18.4802 20 17.921 20 16.8031V8M4 8H20M4 8L5.36518 5.61089C5.7002 5.0246 5.86768 4.73151 6.10325 4.51807C6.31184 4.32907 6.55859 4.18605 6.82617 4.09871C7.12861 4 7.46623 4 8.14258 4H15.8571C16.5334 4 16.8723 4 17.1747 4.09871C17.4423 4.18605 17.6879 4.32907 17.8965 4.51807C18.1322 4.73168 18.3002 5.02507 18.6357 5.6123L20 8M12 11V17M12 17L15 15M12 17L9 15"
                            stroke="#ff6600"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    <span class="ml-1">Get Receipt</span>
                  </div>
                </Link>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                10 Feb 2023
              </th>
              <td class="px-6 py-4">2 Hrs</td>
              <td class="px-6 py-4">English</td>
              <td class="px-6 py-4">
                <Link href="#">
                  <div className="flex text-orange-500">
                    <svg
                      class="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
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
                        <g id="File / Download_Package">
                          {" "}
                          <path
                            id="Vector"
                            d="M4 8V16.8C4 17.9201 4 18.4798 4.21799 18.9076C4.40973 19.2839 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2839 19.7822 18.9076C20 18.4802 20 17.921 20 16.8031V8M4 8H20M4 8L5.36518 5.61089C5.7002 5.0246 5.86768 4.73151 6.10325 4.51807C6.31184 4.32907 6.55859 4.18605 6.82617 4.09871C7.12861 4 7.46623 4 8.14258 4H15.8571C16.5334 4 16.8723 4 17.1747 4.09871C17.4423 4.18605 17.6879 4.32907 17.8965 4.51807C18.1322 4.73168 18.3002 5.02507 18.6357 5.6123L20 8M12 11V17M12 17L15 15M12 17L9 15"
                            stroke="#ff6600"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    <span class="ml-1">Get Receipt</span>
                  </div>
                </Link>
              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                30 Jan 2023
              </th>
              <td class="px-6 py-4">3 Hrs</td>
              <td class="px-6 py-4">French</td>
              <td class="px-6 py-4">
                <Link href="#">
                  <div className="flex text-orange-500">
                    <svg
                      class="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
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
                        <g id="File / Download_Package">
                          {" "}
                          <path
                            id="Vector"
                            d="M4 8V16.8C4 17.9201 4 18.4798 4.21799 18.9076C4.40973 19.2839 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2839 19.7822 18.9076C20 18.4802 20 17.921 20 16.8031V8M4 8H20M4 8L5.36518 5.61089C5.7002 5.0246 5.86768 4.73151 6.10325 4.51807C6.31184 4.32907 6.55859 4.18605 6.82617 4.09871C7.12861 4 7.46623 4 8.14258 4H15.8571C16.5334 4 16.8723 4 17.1747 4.09871C17.4423 4.18605 17.6879 4.32907 17.8965 4.51807C18.1322 4.73168 18.3002 5.02507 18.6357 5.6123L20 8M12 11V17M12 17L15 15M12 17L9 15"
                            stroke="#ff6600"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    <span class="ml-1">Get Receipt</span>
                  </div>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table Ends  */}
    </div>
  );
}

export default PaymentHistory