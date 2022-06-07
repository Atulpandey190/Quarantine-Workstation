import React from "react";
import "./ChatBody.css";
import MessageContent from "./MessageContent";

const ChatBody = ({ messageList, dashboardState }) => {
  return (
    <div className="chat-body">
      {messageList.map((messageContent) => {
        return (
          <div
            className="message"
            id={
              dashboardState.username != messageContent.author ? "you" : "other"
            }
          >
            <MessageContent messageContent={messageContent} />
          </div>
        );
      })}
    </div>
  );
};

export default ChatBody;
