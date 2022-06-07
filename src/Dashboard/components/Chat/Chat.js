import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../Chat/Chat.css";
import * as webRTCGroupCallHandler from "../../../utils/webRTC/webRTCGroupCallHandler";
import { socket } from "../../../utils/wssConnection/wssConnection";
import ChatBody from "./ChatBody";
import ChatInput from "./ChatInput";
import ChatHeader from "./ChatHeader";
function Chat({ username, room }) {
  console.log(username, room);
  const dashboardState = useSelector((state) => state.dashboardReducer);
  const callState = useSelector((state) => state.groupCallReducer);
  const [currentMessage, setcurrentMessage] = useState("");
  const [messageList, setmessageList] = useState([]);

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
      setmessageList((list) => [...list, messageData]);
      setcurrentMessage("");
    }
  };

  useEffect(() => {
    console.log(socket);
    if (dashboardState.groupCallRoom) {
      socket.off('receive_message').on("receive_message", (data) => {
        console.log("Received");
        if (dashboardState.username != data.author)
          setmessageList((list) => [...list, data]);
      });
    }
  }, [dashboardState.groupCallRoom, dashboardState.username, socket]);

  return (
    <div className="chat-window">
      <ChatHeader dashboardState={dashboardState} />
      <ChatBody dashboardState={dashboardState} messageList={messageList} />
      <ChatInput
        currentMessage={currentMessage}
        setcurrentMessage={setcurrentMessage}
        sendMessage={sendMessage}
      />
    </div>
  );
}

export default Chat;
