import React from "react";
import RoomCall from "./RoomCall/RoomCall";
import Roommembers from "./RoomMembers/Roommembers";
import * as webRTCGroupCallHandler from "../../../utils/webRTC/webRTCGroupCallHandler";
import RoomCallVideo from "./RoomCall/RoomCallVideo";

const Room = (props) => {
  console.log(props);
  const { localStream, groupCallActive, groupCallStreams } = props;

  const createRoom = (e) => {
    e.preventDefault();
    webRTCGroupCallHandler.newGroupCallRoom();
  };
  const leaveRoom = (e) => {
    e.preventDefault();
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
              return <RoomCallVideo key={stream.id} stream={stream} />;
            })}
          </div>
        </div>
      )}

      {!groupCallActive && (
        <button
          onClick={(e) => {
            createRoom(e);
          }}
        >
          Join Group Call
        </button>
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
      <Roommembers />
    </>
  );
};

export default Room;
