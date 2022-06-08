import * as dashboardActions from "../actions/dashboardActions";

const initState = {
  username: "",
  activeUsers: [],
  groupCallRoom: null,
  messageList: [],
  showChat: true,
  showMusicPlayer: true,
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
    case dashboardActions.DASHBOARD_SET_GROUP_CALL_ROOM:
      return {
        ...state,
        groupCallRoom: action.groupCallRoom,
      };
    case dashboardActions.DASHBOARD_SET_USER_MESSAGE_LIST:
      return {
        ...state,
        messageList: state.messageList.concat(action.messageData),
      };
    case dashboardActions.DASHBOARD_SET_SHOW_CHAT:
      return {
        ...state,
        showChat: action.showChat,
      };
    case dashboardActions.DASHBOARD_SET_SHOW_MUSIC_PLAYER:
      return {
        ...state,
        showMusicPlayer: action.showMusicPlayer,
      };
    default:
      return state;
  }
};

export default reducer;
