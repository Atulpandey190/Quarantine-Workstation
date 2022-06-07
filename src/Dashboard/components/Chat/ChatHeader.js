import React from "react";

const ChatHeader = ({ dashboardState }) => {
  return (
    <div className="chat-header">
      <h4>
        Room <span>{dashboardState.groupCallRoom}</span>
      </h4>
    </div>
  );
};

export default ChatHeader;
