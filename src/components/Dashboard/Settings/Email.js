import React from "react";

const Email = () => {
  return (
    <div className="bg-white">
      <div className="width-full border-b-2 border-gray-300">
        <h1 className="py-8 px-8 text-lg font-bold">Email Address</h1>
      </div>
      <div className="m-4 px-6">
        <div className="m-4">
          <form>
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter Your Email Address
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="@  For e.g :xyz123@gmail.com"
                required
              />
            </div>
            <button
              type="submit"
              class="text-white mt-4 bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Save Settings
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Email;
