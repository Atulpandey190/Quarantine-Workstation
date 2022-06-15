import React from "react";
import { useSelector } from "react-redux";
import "./Controlarea.css";
import {
  CameraButton,
  LeaveButton,
  MicButton,
  ShowChatButton,
  ShowMusicPlayerButton,
} from "../../../UI/ControlButtons";
import ActiveUsersList from "../ActiveUsers/ActiveUsersList";
import Room from "../Room/Room";
export function Controlarea({ localStream }) {
  const callState = useSelector((state) => state.groupcallReducer);
  const dashboardState = useSelector((state) => state.dashboardReducer);
  return (
    <div className="control-area">
      <div className="control-area-heading">
        <h4>Group Call</h4>
      </div>
      <div className="room-container">
        <Room />
      </div>

      {callState.groupCallActive && (
        <div className="icons-area">
          <MicButton localStream={localStream} />
          <ShowChatButton showChat={dashboardState.showChat} />
          <LeaveButton />
          <ShowMusicPlayerButton
            showMusicPlayer={dashboardState.showMusicPlayer}
          />
          <CameraButton localStream={localStream} />
        </div>
      )}
    </div>
  );
}
