import React from 'react'
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Image from "next/image";
import image from "../../../public/assets/download.jpg";
import StudentReviews from './StudentReviews'
import Tabs from './Tabs'

const DescriptionLeft = () => {
    const [openTab, setOpenTab] = React.useState(1);
  return (
    <div className="col-span-2 bg-orange-100">
      <div class="px-20 bg-white">
        <div className="flex px-20 py-10">
          <div class="flex bg-white rounded-lg p-1.5">
            <img
              class="w-28 h-28 rounded-full border-4 border-slate-50 object-cover"
              src="https://www.kindacode.com/wp-content/uploads/2022/05/cute.jpeg"
            />
            <div class="flex flex-col px-5 py-1">
              <h4 class="font-bold text-lg text-black-600">Salwan. R.</h4>
              <p class="mt-1 flex-1 font-light text-sm text-slate-500">
                Experienced Native Arabic Tutor
              </p>
              <div className="mt-2">
                <ul role="list" class="p-2">
                  <li class="flex first:pt-0 last:pb-0">
                    <div class="relative">
                      <MailOutlineIcon className="h-10 w-10 rounded-full" />
                    </div>

                    <div class="ml-3 overflow-hidden">
                      <p class="text-sm font-medium text-slate-900">
                        Teaches:{" "}
                        <span className="text-sm text-slate-500">Arabic</span>
                      </p>
                      {/* <p class="text-sm text-slate-500">Arabic</p> */}
                    </div>
                  </li>
                  <li class="flex first:pt-0 last:pb-0">
                    <div class="relative">
                      <MailOutlineIcon className="h-10 w-10 rounded-full" />
                    </div>

                    <div class="ml-3 overflow-hidden">
                      <p class="text-sm font-medium text-slate-900">
                        <span className="text-sm text-slate-500">Speaks :</span>{" "}
                        English, Arabic & French
                      </p>
                    </div>
                  </li>
                  <li class="flex first:pt-0 last:pb-0">
                    <div class="relative">
                      <MailOutlineIcon className="h-10 w-10 rounded-full" />
                    </div>

                    <div class="ml-3 overflow-hidden">
                      <p class="text-sm font-medium text-slate-900">
                        320 Classes
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-20 pr-10">
        <div className="bg-white rounded-lg mt-2">
          <Tabs />
        </div>
        <div className="bg-white mt-2 rounded-lg">
          <StudentReviews />
        </div>
      </div>
    </div>
  );
}

export default DescriptionLeft