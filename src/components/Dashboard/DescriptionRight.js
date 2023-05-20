import React from 'react'
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Image from "next/image";
import image from "../../../public/assets/download.jpg";

const DescriptionRight = () => {
  return (
    <div className="col-span-1 bg-white">
      {/* Right card starts  */}
      <div class="w-full max-w-sm mt-20 bg-white border border-gray-200 rounded-lg shadow">
        <Image class="h-40 w-full rounded-t-lg" src={image} alt="image" />
        <div class="flex items-center justify-between mt-2 px-4">
          <a
            href="#"
            class="text-green-800 bg-green-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Newly Joined
          </a>
          <div className="text-center mr-8">
            <h3 className="text-xl font-bold text-gray-900">$48</h3>
            <p>1 hour class</p>
          </div>
        </div>
        <div class="px-5 pb-5">
          <div class="flex flex-col space-y-2">
            <button className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">
              Buy Hours
            </button>
            <button class="bg-transparent hover:bg-orange-500 text-orange-600 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">
              Enter Classroom
            </button>
            <button class="bg-transparent hover:bg-orange-500 text-orange-600 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">
              Archive Tutor
            </button>
            <p>Average response time: 1 hour</p>
          </div>
        </div>
      </div>
      {/* Right card ends  */}
    </div>
  );
}

export default DescriptionRight