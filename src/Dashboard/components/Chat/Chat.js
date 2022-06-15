import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../Chat/Chat.css";
import * as webRTCGroupCallHandler from "../../../utils/webRTC/webRTCGroupCallHandler";
import { socket } from "../../../utils/wssConnection/wssConnection";
import ChatBody from "./ChatBody";
import ChatInput from "./ChatInput";
import ChatHeader from "./ChatHeader";
function Chat({ username, room, newSocket }) {
  const dashboardState = useSelector((state) => state.dashboardReducer);
  const [currentMessage, setcurrentMessage] = useState("");

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: dashboardState.groupCallRoom,
        author: dashboardState.username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      webRTCGroupCallHandler.sendMessageThroughSocket(messageData);
      setcurrentMessage("");
    }
  };

  

  return (
    <div className="chat-window">
      <ChatHeader dashboardState={dashboardState} />
      <ChatBody
        dashboardState={dashboardState}
        messageList={dashboardState.messageList}
      />
      <ChatInput
        currentMessage={currentMessage}
        setcurrentMessage={setcurrentMessage}
        sendMessage={sendMessage}
      />
    </div>
  );
}

export default Chat;
