import React from "react";

const MessageContent = ({ messageContent }) => {
  return (
    <div>
      <div className="message-content">
        <p>{messageContent.message}</p>
      </div>
      <div className="message-meta">
        <p>{messageContent.time}</p>
        <p>{messageContent.author}</p>
      </div>
    </div>
  );
};

export default MessageContent;
