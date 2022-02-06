import React from "react";
import RoomCallVideo from "./RoomCallVideo";
import LocalVideoView from "../../LocalVideoView/LocalVideoView";
const RoomCall = (props) => {
  const {localStream, groupCallActive } = props;

  return (
    <>
      {groupCallActive && localStream && (
        <LocalVideoView localStream={localStream} />
      )}
    </>
  );
};

export default RoomCall;
