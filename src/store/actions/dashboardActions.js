export const DASHBOARD_SET_USERNAME = "DASHBOARD_SET_USERNAME";
export const DASHBOARD_SET_ACTIVE_USERS = "DASHBOARD_SET_ACTIVE_USERS";
export const DASHBOARD_SET_GROUP_CALL_ROOM = "DASHBOARD_SET_GROUP_CALL_ROOM";
export const DASHBOARD_SET_USER_MESSAGE_LIST =
  "DASHBOARD_SET_USER_MESSAGE_LIST";
export const setUsername = (username) => {
  return {
    type: DASHBOARD_SET_USERNAME,
    username, // Payload
  };
};

export const setActiveUsers = (activeUsers) => {
  return {
    type: DASHBOARD_SET_ACTIVE_USERS,
    activeUsers, // Payload
  };
};

export const setGroupCallRoom = (groupCallRoom) => {
  return {
    type: DASHBOARD_SET_GROUP_CALL_ROOM,
    groupCallRoom,
  };
};
export const setUserMessageList = (messageData) => {
  return {
    type: DASHBOARD_SET_USER_MESSAGE_LIST,
    messageData, // PayLoad
  };
};
