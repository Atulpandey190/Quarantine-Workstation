import "./Chattingarea.css";
import { useState } from "react";
import { socketID, socket } from "../../../utils/socket";
import Chat from "../Chat/Chat";
function Chattingarea({ curruser }) {
  const [room, setRoom] = useState("");
  const [showChat, setshowChat] = useState(false);

  const joinRoom = () => {
    if (curruser != "" && room !== "") {
      console.log(room);
      console.log(curruser);
      setshowChat(true);
      socket.emit("join_room", room);
    }
  };
  return (
    <div className="Chattingarea">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join a chat</h3>
          <input
            type="text"
            placeholder="Room Code...."
            onChange={(event) => {
              console.log(event.target.value);
              setRoom(event.target.value);
            }}
          ></input>
          <button onClick={joinRoom}>Join a room..</button>
        </div>
      ) : (
        <Chat socket={socket} username={curruser} room={room} />
      )}
    </div>
  );
}

export default Chattingarea;
