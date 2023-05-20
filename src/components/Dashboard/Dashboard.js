import React from 'react'
import Image from "next/image";
import image from "../../../public/assets/download.jpg";
import LineChart from "./Statistics/LineChart";
import LeftNav from './LeftNav'

const Dashboard = () => {
  return (
    <div className='bg-orange-100'>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 mx-4">
        {/* Left navbar starts  */}
        <div class="grid gap-4">
          <LeftNav />
        </div>
        {/* center navbar starts  */}
        <div class="grid col-span-2 gap-4">
          
        </div>
        {/* center navbar ends  */}
        {/* right navbar starts  */}
        <div class="grid gap-4">
          
        </div>
        {/* right navbar ends */}
      </div>
    </div>
  );
}

export default Dashboard