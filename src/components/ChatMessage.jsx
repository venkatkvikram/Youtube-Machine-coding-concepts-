import React, { useEffect } from "react";

const ChatMessage = ({ name, message }) => {


  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-8"
        alt="user-icon"
        src="https://yt4.ggpht.com/ytc/AIdro_n2udBzeYBteVO94AOvACDKqyHN4sBTqV2YenVzO3Y2Ic5h7sd9c1UhQi-g7V9kvb_L3A=s32-c-k-c0x00ffffff-no-rj "
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
