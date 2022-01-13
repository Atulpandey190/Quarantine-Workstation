import * as dashboardActions from "../actions/dashboardActions";

const initState = {
  username: "",
  activeUsers: [],
  groupCallRooms: [],
};
//Creating intial State for a Client User

const reducer = (state = initState, action) => {
  switch (action.type) {
    case dashboardActions.DASHBOARD_SET_USERNAME:
      return {
        ...state,
        username: action.username,
      };
    case dashboardActions.DASHBOARD_SET_ACTIVE_USERS:
      return {
        ...state,
        activeUsers: action.activeUsers,
      };
    case dashboardActions.DASHBOARD_SET_GROUP_CALL_ROOMS:
      return {
        ...state,
        groupCallRooms: action.groupCallRooms,
      };
    default:
      return state;
  }
};

export default reducer;
