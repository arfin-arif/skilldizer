import React from 'react'
import LeftNav from "../../../src/components/Dashboard/LeftNav";
import PaymentHistory from '../../../src/components/Dashboard/Settings/PaymentHistory';

const payment_history = () => {
  return (
    <div>
      <div className="bg-orange-100">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 mx-4">
          {/* Left navbar starts  */}
          <div class="grid gap-4">
            <LeftNav />
          </div>

          {/* center navbar starts  */}
          <div class="grid col-span-3 gap-4">
            <PaymentHistory />
          </div>
          {/* center navbar ends  */}
          {/* right navbar starts  */}
          {/* <div class="grid gap-4">right</div> */}
          {/* right navbar ends */}
        </div>
      </div>
    </div>
  );
}

export default payment_history;
payment_history.requireAuth = true;