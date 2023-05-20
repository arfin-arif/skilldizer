import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Image from "next/image";
import image from "../../../../public/assets/download.jpg";
import Link from "next/link";

const BuyHoursModal = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
        <button
          type="button"
          onClick={openModal}
          className="text-white hover:text-white font-medium rounded-lg text-sm dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Buy Hours
        </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-x-0 top-28 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-gray-900 flex justify-between"
                  >
                    Buy Hours
                    <button
                      type="button"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="medium-modal"
                      onClick={closeModal}
                    >
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </Dialog.Title>
                  <div className="mt-4">
                    <div className="text-center">
                      <Link
                        href="#"
                        className="bg-orange-100 text-orange-500 rounded-lg hover:bg-orange-200 px-2 py-2"
                      >
                        Transfer Credits
                      </Link>
                    </div>
                    <div className="m-4">
                      <ul className="space-y-2">
                        <li className="bg-orange-100 rounded-lg">
                          <div className="flex justify-between p-2">
                            <div class="flex items-center space-x-2">
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
                            <div>
                              <Link
                                href="/subscription"
                                className="inline-flex justify-center rounded-md border border-transparent bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={closeModal}
                              >
                                Buy Hours
                              </Link>
                            </div>
                          </div>
                        </li>

                        <li className="bg-orange-100 rounded-lg">
                          <div className="flex justify-between p-2">
                            <div class="flex items-center space-x-2">
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
                            <div>
                              <Link
                                href="/subscription"
                                className="inline-flex justify-center rounded-md border border-transparent bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={closeModal}
                              >
                                Buy Hours
                              </Link>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4">
                    {/* <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button> */}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default BuyHoursModal;
