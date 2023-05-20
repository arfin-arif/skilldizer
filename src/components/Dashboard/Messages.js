import React from "react";
import LeftNav from "./LeftNav";
import MessagesRight from './MessagesRight'

const Messages = () => {
  return (
    <div className="grid grid-cols-8 gap-2">
      <div className="col-span-2 my-2">
        <LeftNav />
      </div>
      <div className="bg-orange-100 col-span-6">
        <MessagesRight />
        </div>
    </div>
  );
};

export default Messages;
