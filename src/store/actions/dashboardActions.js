export const DASHBOARD_SET_USERNAME = "DASHBOARD_SET_USERNAME";
export const DASHBOARD_SET_ACTIVE_USERS = "DASHBOARD_SET_ACTIVE_USERS";
export const DASHBOARD_SET_GROUP_CALL_ROOM = "DASHBOARD_SET_GROUP_CALL_ROOM";
export const DASHBOARD_SET_USER_MESSAGE_LIST =
  "DASHBOARD_SET_USER_MESSAGE_LIST";
export const DASHBOARD_SET_SHOW_CHAT = "DASHBOARD_SET_SHOW_CHAT";
export const DASHBOARD_SET_SHOW_MUSIC_PLAYER =
  "DASHBOARD_SET_SHOW_MUSIC_PLAYER";
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

export const setShowChat = (showChat) => {
  return {
    type: DASHBOARD_SET_SHOW_CHAT,
    showChat,
  };
};

export const setShowMusicPlayer = (showMusicPlayer) => {
  return {
    type: DASHBOARD_SET_SHOW_MUSIC_PLAYER,
    showMusicPlayer,
  };
};
