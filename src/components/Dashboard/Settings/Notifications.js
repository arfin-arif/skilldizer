import React from "react";
import Link from "next/link";

const Notifications = () => {
  return (
    <div className="bg-white">
      <div className="width-full border-b-2 border-gray-300">
        <h1 className="py-6 px-8  text-3xl font-semibold">
          Notifications Center
        </h1>
      </div>
      <div className="m-4 px-6">
        <div className="m-4">
          <form>
            <fieldset>
              <legend class="font-medium text-gray-900 leading-6">
                Email Notifications
              </legend>
              <div class="mt-4 space-y-6">
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input
                      id="messages"
                      name="messages"
                      type="checkbox"
                      class="h-5 w-5 rounded border-orange-500 text-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <div class="text-sm leading-6">
                    <label for="class" class="font-medium text-gray-900">
                      Class Scheduling
                    </label>
                    <p class="text-gray-500">
                      Alerts about new classes and schedule changes
                    </p>
                  </div>
                </div>
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input
                      id="messages"
                      name="messages"
                      type="checkbox"
                      class="h-5 w-5 rounded border-orange-500 text-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <div class="text-sm leading-6">
                    <label for="reminders" class="font-medium text-gray-900">
                      General Reminders
                    </label>
                    <p class="text-gray-500">
                      Notificationa about classes, tutor messages, and payments
                    </p>
                  </div>
                </div>
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input
                      id="messages"
                      name="messages"
                      type="checkbox"
                      class="h-5 w-5 rounded border-orange-500 text-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <div class="text-sm leading-6">
                    <label for="offers" class="font-medium text-gray-900">
                      Updates, Tips, and Offers
                    </label>
                    <p class="text-gray-500">
                      Stay connected with product updates, helpful tips, and
                      special offers
                    </p>
                  </div>
                </div>
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input
                      id="messages"
                      name="messages"
                      type="checkbox"
                      class="h-5 w-5 rounded border-orange-500 text-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <div class="text-sm leading-6">
                    <label for="blog" class="font-medium text-gray-900">
                      Skilldizer Blog
                    </label>
                    <p class="text-gray-500">
                      Occassional newsletter with the latest posts
                    </p>
                  </div>
                </div>
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input
                      id="messages"
                      name="messages"
                      type="checkbox"
                      class="h-5 w-5 rounded border-orange-500 text-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <div class="text-sm leading-6">
                    <label for="questions" class="font-medium text-gray-900">
                      Q & A Section
                    </label>
                    <p class="text-gray-500">
                      Receive tutors` replies to your questions
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="mt-2">
              <legend class="font-medium mt-2 font-semibold leading-6 text-gray-900">
                SMS Notifications
              </legend>
              <div class="mt-2 space-y-6">
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input
                      id="messages"
                      name="messages"
                      type="checkbox"
                      class="h-5 w-5 rounded border-orange-500 text-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <div class="text-sm leading-6">
                    <label for="messages" class="font-medium text-gray-900">
                      Classes and Messages
                    </label>
                    <p class="text-gray-500">
                      SMS alerts about new requests, trial class bookings, and
                      upcoming trial class
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="mt-2">
              <legend class="font-medium mt-2 leading-6 text-gray-900">
                Skilldizer Insights
              </legend>
              <div class="mt-2 space-y-6">
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input
                      id="messages"
                      name="messages"
                      type="checkbox"
                      class="h-5 w-5 rounded border-orange-500 text-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <div class="text-sm leading-6">
                    <label for="insights" class="font-medium text-gray-900">
                      Allow Skilldizer to contact me for product improvements
                    </label>
                    <p class="text-gray-500">
                      Product improvements, research, and beta testing
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="mt-2">
              <button
                type="submit"
                class="text-white bg-orange-500 hover:bg-orange-600 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
