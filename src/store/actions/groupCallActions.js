export const GROUP_CALL_SET_ROOM_MEMBERS = "GROUP_CALL_SET_ROOM_MEMBERS";

export const setGroupCallRoomMembers = (roomId_roomMembers) => {
  //roomId_roomMembers = {roomId:roomMembers}
  return {
    type: GROUP_CALL_SET_ROOM_MEMBERS,
    roomId_roomMembers,
  };
};
