export const DASHBOARD_SET_USERNAME = "DASHBOARD_SET_USERNAME";
export const DASHBOARD_SET_ACTIVE_USERS = "DASHBOARD_SET_ACTIVE_USERS";
export const DASHBOARD_SET_GROUP_CALL_ROOMS = "DASHBOARD_SET_GROUP_CALL_ROOMS";
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

export const setGroupCallRooms = (groupCallRooms) => {
  return {
    type: DASHBOARD_SET_GROUP_CALL_ROOMS,
    groupCallRooms,
  };
};