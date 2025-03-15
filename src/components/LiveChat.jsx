import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/chatSlice";
import { generateRandomName, generateString } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("API polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateString(30) + "🚀",
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="ml-2 p-2 border-black border-2 w-full h-[600px] bg-slate-50 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages?.map((chat, index) => (
            <ChatMessage key={index} name={chat.name} message={chat.message} />
          ))}
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Venkata Sai",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
        className="w-full p-2 ml-2 border-2 border-gray-200"
      >
        <input
          type="text"
          placeholder="Enter you text here.."
          className="w-96 border-1 border-black p-2"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
