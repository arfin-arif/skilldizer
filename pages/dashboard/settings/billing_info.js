import React from 'react'
import LeftNav from "../../../src/components/Dashboard/LeftNav";
import BillingInfo from "../../../src/components/Dashboard/Settings/BillingInfo";

const billing_info = () => {
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
            <BillingInfo />
          </div>
          {/* center navbar ends  */}
          {/* right navbar starts  */}
          {/* <div class="grid gap-4">
            right
          </div> */}
          {/* right navbar ends */}
        </div>
      </div>
    </div>
  );
}

export default billing_info;
billing_info.requireAuth = true;