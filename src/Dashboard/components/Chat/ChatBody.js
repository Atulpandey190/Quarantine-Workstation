import React from "react";
import "./ChatBody.css";
import MessageContent from "./MessageContent";
import ScrollToBottom from "react-scroll-to-bottom";
const ChatBody = ({ messageList, dashboardState }) => {
  return (
    <div className="chat-body">
      <ScrollToBottom className="message-container">
        {messageList.map((messageContent) => {
          return (
            <div
              key={messageContent.time}
              className="message"
              id={
                dashboardState.username != messageContent.author
                  ? "you"
                  : "other"
              }
            >
              <MessageContent messageContent={messageContent} />
            </div>
          );
        })}
      </ScrollToBottom>
    </div>
  );
};

export default ChatBody;
