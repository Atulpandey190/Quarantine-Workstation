import "./Chattingarea.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import Chat from "../Chat/Chat";
import * as webRTCGroupCallHandler from "../../../utils/webRTC/webRTCGroupCallHandler";
import { useEffect } from "react";
function Chattingarea() {
  const [showChat, setshowChat] = useState(true);

  const dashboardState = useSelector((state) => state.dashboardReducer);
  useEffect(() => {
    if (
      dashboardState.username !== "" &&
      dashboardState.groupCallRoom !== null
    ) {
      setshowChat(true);
      console.log(dashboardState.groupCallRoom);
      
    }
  }, [dashboardState.username, dashboardState.groupCallRoom]);
  return (
    <div className="Chattingarea">
      {!showChat ? (
        <></>
      ) : (
        <Chat
          username={dashboardState.username}
          room={dashboardState.groupCallRoom}
        />
      )}
    </div>
  );
}

export default Chattingarea;
