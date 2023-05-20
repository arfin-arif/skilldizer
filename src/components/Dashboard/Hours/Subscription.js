import React from "react";
import Image from "next/image";
import image from "../../../../public/assets/download.jpg";

const Subscription = () => {
  return (
    <div className="bg-white">
      <div>
        <div class="grid gap-4 m-6">
          <div className="content-center">
            <div class="w-full">
              <div className="justify-center flex">
                <Image
                  class="w-40 h-40 rounded-full"
                  src={image}
                  alt="image"
                />
              </div>
              <div class=" m-t-2 text-3xl  text-gray-900 antialiased  text-center">
                Buy Package from Safwan R.
              </div>
              <div class=" m-t-2 text-xl  text-gray-900  antialiased  text-center">
                Take classes often and see how fast you progress
              </div>
            </div>
          </div>
          <div class="grid grid-cols-5 gap-4 px-8 mt-2">
            <div className="h-auto max-w-full rounded-lg shadow border border-gray-200">
              <div className="p-2 text-center">
                <h3 class="text-3xl font-bold dark:text-white">Basic</h3>
                <h3 class="text-xl font-bold dark:text-white">
                  1 Hours Credit
                </h3>
                <h1 class="text-3xl font-bold dark:text-white">$10</h1>
                <div className="mt-6">
                  <button class="bg-orange-100 hover:bg-orange-500 text-orange-600 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded-full shadow">
                    Purchase Plan
                  </button>
                </div>
              </div>
            </div>

            <div className="h-auto max-w-full rounded-lg shadow border border-gray-200">
              <div className="p-2 text-center">
                <h3 class="text-3xl font-bold dark:text-white">Standard</h3>
                <h3 class="text-xl font-bold dark:text-white">
                  4 Hours Credit
                </h3>
                <h1 class="text-3xl font-bold dark:text-white">$40</h1>
                <div className="mt-6">
                  <button class="bg-orange-100 hover:bg-orange-500 text-orange-600 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded-full shadow">
                    Purchase Plan
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-orange-500 rounded-t-full text-white text-center">
                <p>Popular</p>
              </div>
              <div className="h-auto max-w-full rounded-b-lg shadow border border-gray-200">
                <div className="p-2 text-center">
                  <h3 class="text-3xl font-bold dark:text-white">
                    Professional
                  </h3>
                  <h3 class="text-xl font-bold dark:text-white">
                    15 Hours Credit
                  </h3>
                  <h1 class="text-3xl font-bold dark:text-white">$150</h1>
                  <div className="mt-6">
                    <button class="bg-orange-500 hover:bg-orange-600 text-white font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded-full shadow">
                      Purchase Plan
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-auto max-w-full rounded-lg shadow border border-gray-200">
              <div className="p-2 text-center">
                <h3 class="text-3xl font-bold dark:text-white">Premium</h3>
                <h3 class="text-xl font-bold dark:text-white">
                  8 Hours Credit
                </h3>
                <h1 class="text-3xl font-bold dark:text-white">$80</h1>
                <div className="mt-6">
                  <button class="bg-orange-100 hover:bg-orange-500 text-orange-600 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded-full shadow">
                    Purchase Plan
                  </button>
                </div>
              </div>
            </div>
            <div className="h-auto max-w-full rounded-lg shadow border border-gray-200">
              <div className="p-2 text-center">
                <h3 class="text-3xl font-bold dark:text-white">Platinum</h3>
                <h3 class="text-xl font-bold dark:text-white">
                  20 Hours Credit
                </h3>
                <h1 class="text-3xl font-bold dark:text-white">$200</h1>
                <div className="mt-6">
                  <button class="bg-orange-100 hover:bg-orange-500 text-orange-600 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded-full shadow">
                    Purchase Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
