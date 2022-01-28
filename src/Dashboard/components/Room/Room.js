import React from "react";
import RoomCall from "./RoomCall/RoomCall";
import Roommembers from "./RoomMembers/Roommembers";

const Room = (props) => {
  return (
    <>
      <RoomCall {...props} />
      <Roommembers />
    </>
  );
};

export default Room;
