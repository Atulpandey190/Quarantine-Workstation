export const callStates = {
  CALL_UNAVAILABLE: "CALL_UNAVAILABLE",
  CALL_AVAILABLE: "CALL_AVAILABLE",
  CALL_IN_PROGRESS: "CALL_IN_PROGRESS",
  CALL_REQUESTED: "CALL_REQUESTED",
};
export const CALL_SET_CALL_STATE = "CALL.SET_CALL_STATE";
export const CALL_SET_ROOM_MEMBERS = "CALL.SET_ROOM_MEMBERS";
export const CALL_SET_GROUP_CALL_ACTIVE = "CALL.SET_GROUP_CALL_ACTIVE";
export const CALL_CLEAR_GROUP_CALL_DATA = "CALL.CLEAR_GROUP_CALL_DATA";
export const CALL_SET_GROUP_CALL_LOCAL_STREAM =
  "CALL.SET_GROUP_CALL_LOCAL_STREAM";
export const CALL_SET_GROUP_CALL_STREAMS = "CALL.SET_GROUP_CALL_STREAMS";
export const setCallState = (callState) => {
  return {
    type: CALL_SET_CALL_STATE,
    callState,
  };
};
export const setGroupCallActive = (active) => {
  return {
    type: CALL_SET_GROUP_CALL_ACTIVE,
    active,
  };
};

export const setLocalStream = (localStream) => {
  console.log(localStream);
  return {
    type: CALL_SET_GROUP_CALL_LOCAL_STREAM,
    localStream,
  };
};
export const setGroupCallIncomingStreams = (groupCallStreams) => {
  return {
    type: CALL_SET_GROUP_CALL_STREAMS,
    groupCallStreams,
  };
};
export const clearGroupCallData = () => {
  return {
    type: CALL_CLEAR_GROUP_CALL_DATA,
  };
};

export const setGroupCallRoomMembers = (roomId_roomMembers) => {
  //roomId_roomMembers = {roomId:roomMembers}
  return {
    type: CALL_SET_ROOM_MEMBERS,
    roomId_roomMembers,
  };
};
