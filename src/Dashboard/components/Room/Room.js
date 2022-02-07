import React, { useState } from "react";
import RoomCall from "./RoomCall/RoomCall";
import Roommembers from "./RoomMembers/Roommembers";

import "./RoomCall/RoomCall.css";
import * as webRTCGroupCallHandler from "../../../utils/webRTC/webRTCGroupCallHandler";
import RoomCallVideo from "./RoomCall/RoomCallVideo";
import { useDispatch, useSelector } from "react-redux";
import { setGroupCallRoom } from "../../../store/actions/dashboardActions";
const Room = (props) => {
  const [room, setRoom] = useState("");
  const { localStream, groupCallActive, groupCallStreams } = props;
  const dashboardState = useSelector((state) => state.dashboardReducer);
  const dispatch = useDispatch();
  const createRoom = (e) => {
    e.preventDefault();
    if (room !== "") {
      console.log(room);
      dispatch(setGroupCallRoom(room));
      //Create new Group Call Room
      webRTCGroupCallHandler.newGroupCallRoom({
        username: dashboardState.username,
        room: room,
      });
    }
  };
  const leaveRoom = (e) => {
    e.preventDefault();
    dispatch(setGroupCallRoom(""));
    webRTCGroupCallHandler.leaveGroupCall();
  };
  return (
    <>
      {console.log(groupCallStreams)}
      {groupCallActive && (
        <div className="group_call_room_container">
          <span className="group_call_title">Group Call</span>
          <div className="group_call_videos_container">
            {groupCallStreams.map((stream) => {
              return (
                <>
                  {stream.id !== localStream.id ? (
                    <>
                      <p>{stream.id}</p>
                      <RoomCallVideo key={stream.id} stream={stream} />
                    </>
                  ) : (
                    <></>
                  )}
                </>
              );
            })}
          </div>
        </div>
      )}

      {!groupCallActive && (
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
      )}

      {groupCallActive && <RoomCall {...props} />}
      {groupCallActive && (
        <button
          onClick={(e) => {
            leaveRoom(e);
          }}
        >
          Leave Group Call
        </button>
      )}
    </>
  );
};

export default Room;
