import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import * as webRTCGroupCallHandler from "../../../utils/webRTC/webRTCGroupCallHandler";
import { socket } from "../../../utils/wssConnection/wssConnection";
function Chat({ username, room }) {
  console.log(username, room);
  const dashboardState = useSelector((state) => state.dashboardReducer);
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
    }
  };

  useEffect(() => {
    console.log(socket);
    socket.on("receive_message", (data) => {
      console.log("Recieved");
      if (dashboardState.username != data.author)
        setmessageList((list) => [...list, data]);
    });
  }, [dashboardState.username, socket]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Group Room : {dashboardState.groupCallRoom}</p>
      </div>
      <div className="chat-body">
        {messageList.map((messageContent) => {
          return (
            <div
              className="message"
              id={
                dashboardState.username != messageContent.author
                  ? "you"
                  : "other"
              }
            >
              <div>
                <div className="message-content">
                  <p>{messageContent.message}</p>
                </div>
                <div className="message-meta">
                  <p>{messageContent.time}</p>
                  <p>{messageContent.author}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="chat-footer">
        <input
          type="text"
          placeholder="Write your message here"
          onChange={(event) => {
            setcurrentMessage(event.target.value);
          }}
        ></input>
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;
