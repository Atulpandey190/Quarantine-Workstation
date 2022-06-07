import React, { useState } from "react";
import RoomCall from "./RoomCall/RoomCall";
import "./RoomCall/RoomCall.css";
import "./Room.css";
import * as webRTCGroupCallHandler from "../../../utils/webRTC/webRTCGroupCallHandler";
import RoomCallVideo from "./RoomCall/RoomCallVideo";
import { useDispatch, useSelector } from "react-redux";
import { setGroupCallRoom } from "../../../store/actions/dashboardActions";
import Card from "../../../UI/Card";
const Room = (props) => {
  const [room, setRoom] = useState("");
  const dashboardState = useSelector((state) => state.dashboardReducer);
  const callState = useSelector((state) => state.groupcallReducer);
  const { localStream, groupCallActive, groupCallStreams } = { ...callState };

  const dispatch = useDispatch();
  const createRoom = (e) => {
    e.preventDefault();
    if (room !== "") {
      // console.log(room);
      dispatch(setGroupCallRoom(room));
      //Create new Group Call Room
      webRTCGroupCallHandler.newGroupCallRoom({
        username: dashboardState.username,
        room: room,
        streamId: localStream.id,
      });
    }
  };

  return (
    <>
      {groupCallActive && (
        <div className="group_call_videos_container">
          {groupCallActive && <RoomCall {...callState} />}
          {groupCallStreams.map((stream) => {
            return (
              <>
                {stream.id !== localStream.id ? (
                  <>
                    <Card
                      streamId={stream.id}
                      RoomCallVideo={
                        <RoomCallVideo key={stream.id} stream={stream} />
                      }
                    />
                  </>
                ) : (
                  <></>
                )}
              </>
            );
          })}
        </div>
      )}

      {!groupCallActive && (
        <div className="joinChatContainer">
          <h3>Join Group</h3>
          <input
            type="text"
            placeholder="Room Code"
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          ></input>
          <button onClick={createRoom}>Join Group Call</button>
        </div>
      )}
    </>
  );
};

export default Room;
