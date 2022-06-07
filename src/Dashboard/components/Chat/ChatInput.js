import React from "react";
import "./ChatInput.css";
const ChatInput = ({ currentMessage, setcurrentMessage, sendMessage }) => {
  return (
    <div className="chat-footer">
      <input
        type="text"
        placeholder="Write your message here"
        value={currentMessage}
        onChange={(event) => {
          setcurrentMessage(event.target.value);
        }}
        onKeyPress={(event) => {
          event.key === "Enter" && sendMessage();
        }}
      ></input>
      <button onClick={sendMessage}>&#9658;</button>
    </div>
  );
};
export default ChatInput;
