import React from "react";
import * as webRTCGroupCallHandler from "../../../../utils/webRTC/webRTCGroupCallHandler";

const RoomCall = (props) => {
  const { callState, localStream, groupCallActive } = props.callState;

  const createRoom = (e) => {
    e.preventDefault();
    webRTCGroupCallHandler.createNewGroupCall();
  };
  const leaveRoom = (e) => {
    e.preventDefault();
    webRTCGroupCallHandler.leaveGroupCall();
  };
  return (
    <>
      {!groupCallActive && (
        <button
          onClick={(e) => {
            createRoom(e);
          }}
        >
          Join Group Call
        </button>
      )}
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

export default RoomCall;
