import React from "react";
import DescriptionLeft from "./DescriptionLeft";
import DescriptionRight from "./DescriptionRight";

const Description = () => {
  return (
    <div className="bg-orange-100">
      <div className="grid grid-cols-3">
        <DescriptionLeft />
        <DescriptionRight />
      </div>
    </div>
  );
};

export default Description;
