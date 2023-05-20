import React from "react";
import ChatList from './ChatList'
import ChatBox from './ChatBox'
import RightBox from './RightBox'

const Messages = () => {
  return (
    <div>
      <div class="flex flex-row h-auto antialiased text-gray-800 space-x-2">
        <div class="flex flex-row w-full h-full lg:w-1/4 flex-shrink-0 bg-gray-100 p-2">
          <ChatList />
        </div>
        <div class="flex flex-col h-full w-full bg-white px-4 py-6 lg:w-1/2">
          <ChatBox />
        </div>
        <div class="flex flex-col h-auto ml-2 w-full bg-white px-2 py-6 lg:w-1/4">
          <RightBox />
        </div>
      </div>
    </div>
  );
};

export default Messages;
