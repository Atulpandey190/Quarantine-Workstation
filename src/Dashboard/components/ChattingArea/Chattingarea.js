import "./Chattingarea.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { socket } from "../../../utils/socket";
import Chat from "../Chat/Chat";
import { useDispatch } from "react-redux";
import { setGroupCallRoom } from "../../../store/actions/dashboardActions";
import * as webRTCGroupCallHandler from "../../../utils/webRTC/webRTCGroupCallHandler";
import { useEffect } from "react";
function Chattingarea() {
  const [room, setRoom] = useState("");
  const [showChat, setshowChat] = useState(false);

  const dashboardState = useSelector((state) => state.dashboardReducer);

  const dispatch = useDispatch();
  const createRoom = () => {
    if (room !== "") {
      console.log(room);
      dispatch(setGroupCallRoom(room));
    }
  };
  useEffect(() => {
    if (
      dashboardState.username !== "" &&
      dashboardState.groupCallRoom !== null
    ) {
      setshowChat(true);
      console.log(dashboardState.groupCallRoom);
      //Create new Group Call Room
      webRTCGroupCallHandler.newGroupCallRoom({
        username: dashboardState.username,
        room: dashboardState.groupCallRoom,
      });
    }
  }, [dashboardState.username, dashboardState.groupCallRoom]);
  return (
    <div className="Chattingarea">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join a chat</h3>
          <input
            type="text"
            placeholder="Room Code...."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          ></input>
          <button onClick={createRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat
          socket={socket}
          username={dashboardState.username}
          room={dashboardState.groupCallRoom}
        />
      )}
    </div>
  );
}

export default Chattingarea;
