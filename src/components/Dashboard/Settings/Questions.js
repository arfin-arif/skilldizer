import React from "react";
import Image from "next/image";
import image from "../../../../public/assets/download.jpg";

const Questions = () => {
  return (
    <div className="bg-white mr-32">
      <div className="width-full border-gray-300">
        <h1 className="pt-8 px-10 text-3xl font-semibold">
          Where to find my messages and requests
        </h1>
      </div>
      <div className="px-10">
        <div className="mt-2">
          <p className="text-gray-600 text-lg tracking-wide">
            Learn more about the way to stay with your tutor
          </p>
        </div>
        <div className="mt-2">
          <div class="flex items-center space-x-4">
            <Image class="w-10 h-10 rounded-full" src={image} alt="avatar" />
            <div class="font-medium dark:text-white">
              <div class="text-gray-500 tracking-wide">Written by Nazar</div>
              <div class="text-sm text-gray-500 dark:text-gray-400 tracking-wide">
                Updated over a week ago
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <p className="text-lg text-gray-500 tracking-wide">
            All the messages and requests are accessible through the{" "}
            <strong className=" text-lg font-semibold text-gray-900">
              'Messages'
            </strong>{" "}
            menu:
          </p>
          <div className="ml-4">
            <ul class="space-y-1 tracking-wide text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>A blue tick icon indicates that the booking was succesful</li>
              <li>
                A question mark indicates that the payment has not been made yet
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <div>
            <Image class="w-full h-60 rounded-sm" src={image} alt="image" />
          </div>
          <div className="mt-4 text-lg text-gray-500 tracking-wide">
            <p>
              All your messages with different authors can be found here. The
              messages sent through{" "}
              <span className="underline">
                Skilldizer space
              </span>{" "}
              will also be synced automatically and be visible here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
