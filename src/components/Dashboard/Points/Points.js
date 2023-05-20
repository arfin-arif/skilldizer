import React from 'react'
import LeftNav from "../LeftNav";
import Center from "./Center";
import Right from "./Right";

const Points = () => {
  return (
    <div>
      <div className="bg-orange-100">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 mx-4">
          {/* Left navbar starts  */}
          <div class="grid gap-4">
            <LeftNav />
          </div>

          {/* center navbar starts  */}
          <div class="grid col-span-2 gap-4">
            <Center />
          </div>
          {/* center navbar ends  */}
          {/* right navbar starts  */}
          <div class="grid gap-4">
            <Right />
          </div>
          {/* right navbar ends */}
        </div>
      </div>
    </div>
  );
}

export default Points