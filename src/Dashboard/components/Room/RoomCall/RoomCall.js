import React from "react";
import LocalVideoView from "../../LocalVideoView/LocalVideoView";
import Card from "../../../../UI/Card";
const backgroundColor = true;
const RoomCall = (props) => {
  const { localStream, groupCallActive } = props;

  return (
    <>
      {groupCallActive && localStream && (
        <Card
          backgroundColor={backgroundColor}
          RoomCallVideo={<LocalVideoView localStream={localStream} />}
        />
      )}
    </>
  );
};

export default RoomCall;
